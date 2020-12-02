import React from 'react';
import "./about.css";
import Grid from '@material-ui/core/Grid';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';




const About = () => {

    


    return (

        <div id="about" className="about">
            <div>

            <div className="about_title">WHO</div>

            <div className="about_font">1998.05.13 (23세)</div>
            <div className="about_font3">박희정</div>
            <div className="about_font4">대림대학교 모바일인터넷과(3년제)</div>                    
            <div className="about_font1">빠르게 변하는 트렌드를 센스있게 알아채고, 새로움에 있어서 두려워하지 않는 개발자입니다. </div>
            <div className="about_font1">의무적으로만 하는 개발자가 아닌 즐길 수 있는 개발자가 되도록 하겠습니다.</div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{height:"100%"}}>
                        <Grid item style={{margin:"50px"}}>
                            <div className="about_paper1"><AccessibilityNewIcon style={{ fontSize: 100 }}/></div>
                            <div className="about_font2">긍정</div>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <div className="about_paper1"><EmojiPeopleIcon style={{ fontSize: 100 }}/></div>
                            <div className="about_font2">도전</div>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <div className="about_paper1"><DirectionsWalkIcon style={{ fontSize: 100 }}/></div>
                            <div className="about_font2">성실</div>
                        </Grid>
                </Grid>
            </div>
            <div>
            <div className="about_title" >SKILLS</div>
            <div className="about_div"  style={{marginBottom:"50px"}}>
                <Grid
                    container
                    justify="center"
                    style={{height:"100%"}}>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" width="70px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" width="70px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://blog.kakaocdn.net/dn/blbt0s/btqwhKTXnVy/VKF9VUPwpTlWMM5zqwDP81/img.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://blog.telexarsoftware.com/wp-content/uploads/2019/11/logo-redux.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://post-phinf.pstatic.net/MjAxNzAzMjhfMjYw/MDAxNDkwNjY1NDkxNTkw.X94ztffwPOCDs90nzw1_p9TOTqMuyEKgVw8n8baQb9og.IhyZEkUI_rXZHNQnzFjj3xeUE0sKTnOQQ7dHqdOPdqIg.PNG/Java.png?type=w1200" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://i.pinimg.com/originals/4e/74/7c/4e747c82368d9681b75d54f56319dae7.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://shoark7.github.io/assets/img/python/python-logo.png" width="170px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" width="130px" height="80px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://t1.daumcdn.net/cfile/tistory/9923593359840EC50A" width="100px" height="100px" style={{margin: 30}}/>
                        </Grid>
                        <Grid item style={{margin:"50px"}}>
                            <img src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg" width="150px" height="100px" style={{margin: 30}}/>
                        </Grid>
                </Grid>
                
                   
               </div> 
            </div>
        </div>
    );
};

export default About;