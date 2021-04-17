import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "../../Styles/css/dialog.css";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import md5 from "md5";
import { updateDB } from "Helper/firebase";
import { v4 as uuidv4 } from "uuid";

console.log(process.env.REACT_APP_API_URL + "/api/acceptPayment");
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  pay: {
    background: "#ffbd1b",
    color: "#fff",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: "#DAA520",
      color: "#FFF",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, data, totalAmount }) {
  const formEl = useRef();

  const createOrderIntent = (vals) => {
    updateDB({
      ["orders/" + values.m_payment_id]: {
        ...vals,
        cardDetails: {
          provider: data.cardNumberType,
          numberOnFront: data.cardNumberPosition === "front",
          logoText: data.customText,
          logoTextSize: data.textSize,
          name: data.primaryName,
        },
      },
    });
  };

  const { values, errors, handleChange, handleSubmit, submitCount } = useFormik({
    initialValues: {
      name_first: "",
      name_last: "",
      email_address: "",
      address: "",
      city: "",
      state: "",
      m_payment_id: uuidv4(),
    },
    onSubmit: (val) => {
      createOrderIntent(val);
      formEl.current.submit();
    },
  });

  const classes = useStyles();
  const formData = new URLSearchParams({
    merchant_id: 10000100,
    merchant_key: "46f0cd694581a",
    return_url: window.location.origin + "/order-success",
    cancel_url: window.location.origin + "/order-cancelled",
    notify_url: process.env.REACT_APP_API_URL + "/api/acceptPayment",
    name_first: values.name_first,
    name_last: values.name_last,
    email_address: values.email_address,
    m_payment_id: values.m_payment_id,
    amount: totalAmount,
    item_name: "uCard Elite customized card",
  });

  const valuesString = formData.toString();
  const signature = md5(valuesString);

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Invoice Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form method="POST" ref={formEl} action="https://sandbox.payfast.co.za/eng/process/">
              <div className="row dialog-upper">
                <div className="col-md-8">
                  <TextField label="Discount Code" type="text" fullWidth variant="outlined" />
                </div>
                <div className="col-md-4">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    className={classes.pay}
                  >
                    Apply
                  </Button>
                </div>
                {data.borderIndicator && data.borderIndicator.image !== "none" ? (
                  <div className="order">
                    <div className="order-item">
                      <Typography>Border</Typography>
                      <Typography>R {data.borderIndicator.price || 0} +</Typography>
                    </div>
                  </div>
                ) : null}

                <div className="order">
                  <div className="order-item">
                    <Typography>Total</Typography>
                    <Typography>${totalAmount}</Typography>
                  </div>
                </div>
              </div>
              <input type="hidden" name="merchant_id" value={formData.get("merchant_id")}></input>
              <input type="hidden" name="merchant_key" value={formData.get("merchant_key")}></input>
              <input type="hidden" name="return_url" value={formData.get("return_url")}></input>
              <input type="hidden" name="cancel_url" value={formData.get("cancel_url")}></input>
              <input type="hidden" name="notify_url" value={formData.get("notify_url")}></input>
              <div className="container row mt-4">
                <div className="col-md-6">
                  <TextField
                    required
                    error={submitCount > 0 && errors["name_first"]}
                    helperText={submitCount > 0 ? errors["name_first"] : ""}
                    value={values.name_first}
                    label="First Name"
                    name="name_first"
                    onChange={handleChange}
                    type="text"
                    fullWidth
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    required
                    error={submitCount > 0 && errors["name_last"]}
                    helperText={submitCount > 0 ? errors["name_last"] : ""}
                    value={values.name_last}
                    label="Last Name"
                    name="name_last"
                    onChange={handleChange}
                    type="text"
                    fullWidth
                  />
                </div>
                <div className="col-12 mt-4">
                  <TextField
                    required
                    label="Email"
                    type="email"
                    name="email_address"
                    value={values.email_address}
                    onChange={handleChange}
                    error={submitCount > 0 && errors["email"]}
                    helperText={submitCount > 0 ? errors["email"] : ""}
                    fullWidth
                  />
                </div>
              </div>
              <input type="hidden" name="m_payment_id" value={formData.get("m_payment_id")}></input>
              <input type="hidden" name="amount" value={formData.get("amount")}></input>
              <input type="hidden" name="item_name" value={formData.get("item_name")}></input>
              <input type="hidden" name="signature" value={signature}></input>
            </form>
            <div className="container row mt-4">
              <div className="col-md-12">
                <TextField
                  required
                  value={values.address}
                  onChange={handleChange}
                  error={submitCount > 0 && errors["address"]}
                  helperText={submitCount > 0 ? errors["address"] : ""}
                  label="Address"
                  name="address"
                  fullWidth
                  type="text"
                />
              </div>
            </div>
            <div className="container row mt-4">
              <div className="col-md-6">
                <TextField
                  required
                  value={values.city}
                  onChange={handleChange}
                  error={submitCount > 0 && errors["city"]}
                  helperText={submitCount > 0 ? errors["city"] : ""}
                  label="City"
                  name="city"
                  fullWidth
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <TextField
                  required
                  value={values.state}
                  onChange={handleChange}
                  error={submitCount > 0 && errors["state"]}
                  helperText={submitCount > 0 ? errors["state"] : ""}
                  label="State"
                  name="state"
                  fullWidth
                  type="text"
                />
              </div>
            </div>
            <div className="container row justify-content-lg-center mt-4 pt-2 pb-4">
              <div className="col-md-12">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  size="large"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Pay
                </Button>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
