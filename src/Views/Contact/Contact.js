import React from 'react'
import '../../Styles/css/contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {FiInstagram , FiFacebook, FiTwitter} from 'react-icons/fi'



function Contact() {
    return (
        <div className="row contact-container">
            <div className="col-md-5 contact-left">
                <div className="contact-header">
                    Contact
                </div>
            </div>
            <div className="col-md-7 contact-right">
                <div className="outro">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.

                </div>

                <div className="social-div">
                    <FiInstagram className="social-icon"/>
                    <FiFacebook className="social-icon"/>
                    <FiTwitter className="social-icon"/>
                    <AiOutlineMail className="social-icon"/>
                    <AiOutlineMail className="social-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Contact
