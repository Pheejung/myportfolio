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
                        <Grid item style={{margin:"60px"}}>
                            <div className="contact_paper1" style={{textAlign: "center"}}><MarkunreadIcon style={{ fontSize: 100, color: "white" }}/></div>
                            <div className="contact_font">gmlwjd2116@naver.com</div>
                        </Grid>
                        <Grid item style={{margin:"60px"}}>
                            <div className="contact_paper1" style={{textAlign: "center"}}><GitHubIcon style={{ fontSize: 100, color: "white" }}/></div>
                            <div className="contact_font">https://github.com/Pheejung</div>
                        </Grid>
                </Grid>
        </div>
    );
};

export default Contact;