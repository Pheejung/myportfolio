import React from 'react';
import "./contact.css";
import Grid from '@material-ui/core/Grid';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import GitHubIcon from '@material-ui/icons/GitHub';


const Contact = () => {

    return (
        <div id="contact" className="contact">
            <div className="contact_title">CONTACT</div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{height:"100%"}}>
                        <Grid item style={{margin: 50}}>
                            <div className="contact_paper1"><MarkunreadIcon style={{ fontSize: 50, color: "white" }}/></div>
                            <div className="contact_font">gmlwjd2116@naver.com</div>
                        </Grid>
                        <Grid item style={{margin: 50}}>
                            <div className="contact_paper1"><a href="https://github.com/Pheejung"><GitHubIcon style={{ fontSize: 50, color: "white" }}/></a></div>
                            <div className="contact_font">https://github.com/Pheejung</div>
                        </Grid>
                </Grid>
                <div className="contact_font1">
                    끝까지 봐주셔서 감사합니다.
                </div>
                <div className="contact_font1">
                    감사합니다.
                </div>
        </div>
    );
};

export default Contact;