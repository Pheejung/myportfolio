import React, { useEffect, useRef } from 'react';
import "./about.css";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';


import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const heroRef = useRef(null);
    const profileRef = useRef(null);
    const valuesRef = useRef(null);

    useEffect(() => {
        const nodes = [heroRef.current, profileRef.current, valuesRef.current].filter(Boolean);
        nodes.forEach((node, i) => {
            gsap.from(node, {
                autoAlpha: 0,
                y: 40,
                duration: 0.7,
                delay: i * 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: node,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }, []);

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about_title">ABOUT</div>

                <div className="about-hero" ref={heroRef}>
                    <aside className="profile-card" ref={profileRef}>
                        <div className="avatar-wrap">
                            <img className="profile-img" src={process.env.PUBLIC_URL + '/logo192.png'} alt="Heejung profile" />
                        </div>
                        <div className="profile-actions">
                            <a className="btn primary" href="#contact">Contact</a>
                            <a className="btn outline" href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </aside>

                    <div className="about-content">
                        <h3 className="about-heading">간단한 소개</h3>
                        <p className="about-text">
                            비즈니스의 복잡도를 단순하고 견고한 아키텍처로 풀어내는 프론트엔드 개발자 박희정입니다. 운영 제약·사용자 흐름·비즈니스 목적을 함께 고려해 구조를 설계하며, 이벤트 중심의 게임 서비스에서는 상태 관리 단순화·UI 재사용·설정 기반 운영 체계를 도입해 반복 작업과 운영 리스크를 줄였습니다. 기술은 문제 해결과 운영 효율화의 수단으로 보고 장기적 유지보수성과 서비스 안정성을 우선합니다.
                        </p>

                        <div className="about-keywords">
                            <div className="keyword-card">
                                <div className="keyword-body">
                                    <div className="keyword-title">제품 안정성</div>
                                </div>
                            </div>

                            <div className="keyword-card">
                                <div className="keyword-body">
                                    <div className="keyword-title">운영 효율</div>
                                </div>
                            </div>

                            <div className="keyword-card">
                                <div className="keyword-body">
                                    <div className="keyword-title">재사용성</div>
                                </div>
                            </div>
                        </div>

                        <div className="about-skills">
                            <span className="skill-pill">Next.js</span>
                            <span className="skill-pill">React</span>
                            <span className="skill-pill">Angular</span>
                            <span className="skill-pill">TypeScript</span>
                            <span className="skill-pill">JavaScript</span>
                            <span className="skill-pill">HTML/CSS</span>
                        </div>

                        <div className="about-highlight">
                            <h4>핵심 역량</h4>
                            <ul>
                                <li>컴포넌트 기반 아키텍처 설계</li>
                                <li>퍼포먼스 최적화 (번들/렌더링)</li>
                                <li>클린 코드 및 문서화</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="about-values" ref={valuesRef}>
                    <article className="value-card">
                        <div className="value-icon"><AccessibilityNewIcon style={{ fontSize: 28 }} /></div>
                        <div className="value-body">
                            <h4 className="value-title">긍정</h4>
                            <p className="value-desc">문제를 기회로 보고 해결책을 제시합니다. 팀과 함께 성과를 만듭니다.</p>
                        </div>
                    </article>

                    <article className="value-card">
                        <div className="value-icon"><EmojiPeopleIcon style={{ fontSize: 28 }} /></div>
                        <div className="value-body">
                            <h4 className="value-title">도전</h4>
                            <p className="value-desc">새로운 기술을 빠르게 학습하고 실무에 적용해 가치를 만듭니다.</p>
                        </div>
                    </article>

                    <article className="value-card">
                        <div className="value-icon"><DirectionsWalkIcon style={{ fontSize: 28 }} /></div>
                        <div className="value-body">
                            <h4 className="value-title">성실</h4>
                            <p className="value-desc">작은 디테일까지 놓치지 않고 안정적인 서비스 운영을 우선합니다.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;