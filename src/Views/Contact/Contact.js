import React from "react";
import "../../Styles/css/contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Form from "./Form";

function Contact() {
  const [openForm, setOpenForm] = React.useState(false);
  return (
    <div className="row contact-container">
      <div className="col-md-5 contact-left">
        <div className="contact-header">Contact</div>
      </div>
      <div className="col-md-7 contact-right">
        <div className="outro">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
          for use in a type specimen book.
        </div>

        <div className="social-div">
          <a href="https://www.instagram.com/ucardelite/" target="_blank">
            <FiInstagram className="social-icon" />
          </a>
          <a href="https://www.facebook.com/ucardelite" target="_blank">
            <FiFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com/EliteUcard" target="_blank">
            <FiTwitter className="social-icon" />
          </a>
          <AiOutlineMail onClick={() => setOpenForm(true)} className="social-icon" />
          <Form open={openForm} handleClose={() => setOpenForm(false)}></Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
