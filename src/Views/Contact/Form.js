import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "Components/Button";
import { sendEmail } from "Services";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Form = ({ open, handleClose }) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageSent, setMessageSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendEmail({ message, email });
    if (response.success) {
      setMessageSent(true);
    }
    setLoading(false);
  };

  return (
    <Dialog
      classes={{ paper: "w-100" }}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      {messageSent ? (
        <div style={{ height: 449 }} className="p-5 w-100">
          <div className="w-100 h-100 d-flex position-relative">
            <div className="m-auto h4">Your message was sent!</div>
            <div className="position-absolute" style={{ right: 0, bottom: 0 }}>
              <Button
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    setMessageSent(false);
                    setMessage("");
                    setEmail("");
                  }, 300);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-5">
          <div className={"h2 mb-5"}>Contact us</div>
          <div className="mb-4">
            <TextField
              spellCheck={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              variant="outlined"
              label="Your email"
              fullWidth
            />
          </div>
          <div className="mb-4">
            <TextField
              spellCheck={false}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              type="text"
              label="Your message"
              variant="outlined"
              multiline
              fullWidth
              rows={4}
              rowsMax={10}
            />
          </div>
          <div style={{ maxWidth: 200, width: "100%", float: "right" }}>
            <Button type="submit">{loading ? "Loading..." : "Submit"}</Button>
          </div>
        </form>
      )}
    </Dialog>
  );
};

export default Form;
