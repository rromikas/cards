import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import '../../Styles/css/dialog.css'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    pay : {
      background : "#ffbd1b",
      color : "#fff",
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      '&:hover': {
        backgroundColor: "#DAA520",
        color: '#FFF'
    }
    }
  }));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open,handleClose,data}) {
    const [itemData,setItemData] = useState()
    const classes = useStyles()
    useEffect(()=>{
        if(data){
            setItemData(data)
        }
    },[data])


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
                <div className="row dialog-upper">
                    <div className="col-md-8">
                        <TextField
                            label="Discount Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
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
                    {
                    itemData?.item &&
                        <div className="order">
                            <div className="order-item">
                                <Typography>{itemData?.item?.Text}</Typography>
                                <Typography>{itemData?.item?.Price}</Typography>
                            </div>
                        </div> 
                    }

                    {
                    itemData &&
                        <div className="order">
                            <div className="order-item">
                                <Typography>Total</Typography>
                                <Typography>${itemData?.totalPrice}</Typography>
                            </div>
                        </div> 
                    }

                </div>

                <div className="container row mt-4">
                    <div className="col-md-6">
                        <TextField
                            label="Full Name"
                            type="text"
                            fullWidth
                        />
                    </div>
                    <div className="col-md-6">
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="container row mt-4">
                    <div className="col-md-12">
                        <TextField
                            label="Address"
                            fullWidth
                            type="text"
                        />
                    </div>
                </div>
                <div className="container row mt-4">
                    <div className="col-md-6">
                        <TextField
                            label="City"
                            fullWidth
                            type="text"
                        />
                    </div>
                    <div className="col-md-6">
                        <TextField
                            label="State"
                            fullWidth
                            type="text"
                        />
                    </div>
                </div>
                <div className="container row  mt-4">
                    <div className="col-md-12">
                        <TextField
                            label="Card Number"
                            placeholder = "MM/YY CVC"
                            type="tele"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="container row justify-content-lg-center mt-4">
                    <div className="col-md-12">
                        <Button fullWidth  variant="contained" color="secondary">Pay</Button>
                    </div>   
                </div>
            </DialogContentText>
            </DialogContent>
        </Dialog>
        </>
  );
}