import React, { useEffect, useRef } from 'react';
import "./about.css";
import Grid from '@material-ui/core/Grid';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TodayIcon from '@material-ui/icons/Today';


import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const headerRef = useRef(null);
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);

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
            x: -100,
            scrollTrigger: {
              trigger: headerRef1.current,
              start: "top center+=150",
              end: "top",
            }
          });
    
          gsap.from(headerRef2.current, {
            autoAlpha: 0, 
            ease: 'none',
            x: 100,
            scrollTrigger: {
              trigger: headerRef2.current,
              start: "top center+=280",
              end: "top",
            }
          });
    
      }, []);

    return (
        <section id="about" className="about">
            <div className="about_title">ABOUT</div>
            <section ref={headerRef}>
                <div className="about_title1">WHO</div>
                <div className="about_font">1998.05.13 (23세)</div>
                <div className="about_font3">박희정</div>
                <div className="about_font1">"빠르게 변하는 트렌드를 센스있게 알아채고, 새로움에 있어서 두려워하지 않는 개발자입니다."</div>
                <div className="about_font1">"의무적으로만 하는 개발자가 아닌 즐길 수 있는 개발자가 되도록 하겠습니다."</div>
            </section>
            <Grid
                container
                ref={headerRef1}
                justify="center"
                alignItems="center"
                style={{height:"100%"}}>
                <Grid item style={{margin:15, marginTop:50, marginBottom: 50}}>
                    <div className="about_font1_2">안녕하세요. 저는 고등학교때 앱,웹 개발자에 대한 매력을 느끼게 되었고 대학교를 무작정 '컴퓨터공학과'로 진로를 정했습니다. <br />
                    대학교에 올라와 처음 접하는 언어들이라 낯설고 어려웠지만 내가 코딩하는대로 바로 실현되는 모습이 너무나 재미있었습니다. <br />
                    또 개발을 하면서 개발자는 코드를 잘 짜는 것도 중요하지만 협업을 위해 커뮤니케이션이 더 중요하다는 것을 알게되었습니다. <br />
                    저는 꾸준히 성장하고 함께 일하고 싶은 개발자가 되는 것이 목표입니다. 항상 자기개발하고 커뮤니케이션을 키워 발전하는 <br /> 개발자가 되겠습니다.</div>
                    {/* <div className="about_font1_2">처음 간단한 프로젝트를 하면서 보고 치는 것이 아닌 내가 직접 구현하고 해결하는 것이 많이 어려웠습니다.</div> */}
                </Grid>
            </Grid>
            <Grid
                container
                ref={headerRef2}
                justify="center"
                alignItems="center"
                style={{height:"100%"}}>
                <Grid item style={{margin:50}}>
                    <div className="about_paper1"><AccessibilityNewIcon style={{ fontSize: 100 }}/></div>
                    <div className="about_font2">긍정</div>
                    <div className="about_font5">항상 긍정적인 마인드로</div>
                </Grid>
                <Grid item style={{margin:50}}>
                    <div className="about_paper1"><EmojiPeopleIcon style={{ fontSize: 100 }}/></div>
                    <div className="about_font2">도전</div>
                    <div className="about_font5">두려워하지 않는 도전정신</div>
                </Grid>
                <Grid item style={{margin:50}}>
                    <div className="about_paper1"><DirectionsWalkIcon style={{ fontSize: 100 }}/></div>
                    <div className="about_font2">성실</div>
                    <div className="about_font5">작은일이라도 성실하게</div>                
                </Grid>
            </Grid>
        </section>
    );
};

export default About;