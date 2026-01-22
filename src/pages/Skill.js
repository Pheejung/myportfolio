import React, { useEffect, useRef } from 'react';
import "./skill.css";
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
    const headerRef = useRef(null);
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const headerRef3 = useRef(null);
    const headerRef4 = useRef(null);

useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      x: 100,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=100",
        end: "top",
      }
    });

    gsap.from(headerRef1.current, {
        autoAlpha: 0, 
        ease: 'none',
        x: 100,
        scrollTrigger: {
          trigger: headerRef1.current,
          start: "top center+=100",
          end: "top",
        }
      });

      gsap.from(headerRef2.current, {
        autoAlpha: 0, 
        ease: 'none',
        x: 100,
        scrollTrigger: {
          trigger: headerRef2.current,
          start: "top center+=100",
          end: "top",
        }
      });

      gsap.from(headerRef3.current, {
        autoAlpha: 0, 
        ease: 'none',
        x: -100,
        scrollTrigger: {
          trigger: headerRef3.current,
          start: "top center+=100",
          end: "top",
        }
      });
  
      gsap.from(headerRef4.current, {
          autoAlpha: 0, 
          ease: 'none',
          x: -100,
          scrollTrigger: {
            trigger: headerRef4.current,
            start: "top center+=100",
            end: "top",
          }
        });

  }, []);

    return (
        <section id="skill" className="skill">
            <section>
                <div className="skill_title" >SKILLS</div>
                <div className="container">
                  <Grid
                      container
                      className="skill-grid"
                      justify="center"
                      alignItems="flex-start"
                      style={{height:"100%"}}
                  >
                      <Grid item sm={4} className="skill-card" ref={headerRef}>
                          <CheckCircleOutlineSharpIcon className='icon' style={{ fontSize: 44}}/>
                          <h4 className='skill-subtitle'>FrontEnd</h4>
                          <div className='skill-list'>
                              <span className='skill-pill'>HTML5</span>
                              <span className='skill-pill'>CSS</span>
                              <span className='skill-pill'>JavaScript</span>
                              <span className='skill-pill'>React</span>
                              <span className='skill-pill'>Angular</span>
                          </div>
                      </Grid>
                      <Grid item sm={4} className="skill-card" ref={headerRef1}>
                          <CheckCircleOutlineSharpIcon className='icon' style={{ fontSize: 44}}/>
                          <h4 className='skill-subtitle'>BackEnd</h4>
                          <div className='skill-list'>
                              <span className='skill-pill'>PHP</span>
                              <span className='skill-pill'>Java</span>
                              <span className='skill-pill'>Django</span>
                          </div>
                      </Grid>
                      <Grid item sm={4} className="skill-card" ref={headerRef2}>
                          <CheckCircleOutlineSharpIcon className='icon' style={{ fontSize: 44}}/>
                          <h4 className='skill-subtitle'>DB</h4>
                          <div className='skill-list'>
                              <span className='skill-pill'>MariaDB</span>
                              <span className='skill-pill'>MySQL</span>
                              <span className='skill-pill'>mongoDB</span>
                          </div>
                      </Grid>
                      <Grid item sm={4} className="skill-card" ref={headerRef3}>
                          <CheckCircleOutlineSharpIcon className='icon' style={{ fontSize: 44}}/>
                          <h4 className='skill-subtitle'>TOOL</h4>
                          <div className='skill-list'>
                              <span className='skill-pill'>VS Code</span>
                              <span className='skill-pill'>Eclipse</span>
                              <span className='skill-pill'>Android Studio</span>
                              <span className='skill-pill'>Bitbucket</span>
                              <span className='skill-pill'>Github</span>
                          </div>
                      </Grid>
                      <Grid item sm={4} className="skill-card" ref={headerRef4}>
                          <CheckCircleOutlineSharpIcon className='icon' style={{ fontSize: 44}}/>
                          <h4 className='skill-subtitle'>Cloud</h4>
                          <div className='skill-list'>
                              <span className='skill-pill'>Azure</span>
                              <span className='skill-pill'>Ubuntu</span>
                          </div>
                      </Grid>
                  </Grid>
                </div>
                {/* <Grid
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
                            <img src="https://i.ibb.co/LzDCDPg/redux.png" width="155px" height="100px" style={{margin: 30}}/>
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
                </Grid> */}
            </section>
        </section>
    );
};

export default Skill;