import React from 'react';
import "./contact.css";
import MarkunreadIcon from '@material-ui/icons/Markunread';
import GitHubIcon from '@material-ui/icons/GitHub';


const Contact = () => {

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="contact_title">CONTACT</div>
                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="icon-wrap"><MarkunreadIcon style={{ fontSize: 28, color: "white" }}/></div>
                        <a href="mailto:gmlwjd2116@naver.com">gmlwjd2116@naver.com</a>
                    </div>
                    <div className="contact-card">
                        <div className="icon-wrap"><a href="https://github.com/Pheejung"><GitHubIcon style={{ fontSize: 28, color: "white" }}/></a></div>
                        <a href="https://github.com/Pheejung">github.com/Pheejung</a>
                    </div>
                </div>
                <div className="contact-footer">
                    끝까지 봐주셔서 감사합니다. 감사합니다.
                </div>
            </div>
        </div>
    );
};

export default Contact;