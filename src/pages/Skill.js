import React from 'react';
import "./skill.css";
import Grid from '@material-ui/core/Grid';





const Skill = () => {

    return (
        <div id="skill" className="skill">
            <div>
            <div className="skill_title" >SKILLS</div>
                <Grid
                    container
                    justify="center"
                    style={{height:"100%"}}>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://media.vlpt.us/images/ooknimm/post/3f31abd7-dd9a-421a-a08c-a7ff5346c032/1200px-HTML5_logo_and_wordmark.svg.png" width="100px" height="100px" style={{margin: 20}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width="70px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" width="70px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://blog.kakaocdn.net/dn/blbt0s/btqwhKTXnVy/VKF9VUPwpTlWMM5zqwDP81/img.png" width="80px" height="80px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://blog.telexarsoftware.com/wp-content/uploads/2019/11/logo-redux.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://post-phinf.pstatic.net/MjAxNzAzMjhfMjYw/MDAxNDkwNjY1NDkxNTkw.X94ztffwPOCDs90nzw1_p9TOTqMuyEKgVw8n8baQb9og.IhyZEkUI_rXZHNQnzFjj3xeUE0sKTnOQQ7dHqdOPdqIg.PNG/Java.png?type=w1200" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://i.pinimg.com/originals/4e/74/7c/4e747c82368d9681b75d54f56319dae7.png" width="80px" height="80px" style={{margin: 45}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://shoark7.github.io/assets/img/python/python-logo.png" width="140px" height="80px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png" width="90px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" width="90px" height="70px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://t1.daumcdn.net/cfile/tistory/9923593359840EC50A" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"auto"}}>
                            <img src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg" width="150px" height="100px" style={{margin: 30}}/>
                        </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Skill;