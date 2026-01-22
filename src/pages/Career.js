import React, { useEffect, useRef, useState } from 'react';
import "./career.css";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CareerModal from './CareerModal';
import { Modal } from '@material-ui/core';
import { careerData } from '../components/careerData';

gsap.registerPlugin(ScrollTrigger);
const Career = () => {


    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({})
    const [openIndex, setOpenIndex] = useState(null);

    const headerRef = useRef(null);
    const headerRef1 = useRef(null);
    const headerRef2 = useRef(null);
    const headerRef3 = useRef(null);
  
    useEffect(() => {
        gsap.from(headerRef.current, {
            autoAlpha: 0, 
            ease: 'none',
            y: 100,
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top center+=200",
                end: "top",
            }
        });
    
        gsap.from(headerRef1.current, {
            autoAlpha: 0, 
            ease: 'none',
            y: 100,
            scrollTrigger: {
                trigger: headerRef1.current,
                start: "top center+=350",
                end: "top",
            }
        });
  
        gsap.from(headerRef2.current, {
            autoAlpha: 0, 
            ease: 'none',
            y: 100,
            scrollTrigger: {
                trigger: headerRef2.current,
                start: "top center+=300",
                end: "top",
            }
        });

        gsap.from(headerRef3.current, {
            autoAlpha: 0, 
            ease: 'none',
            y: 100,
            scrollTrigger: {
                trigger: headerRef3.current,
                start: "top center+=170",
                end: "top",
            }
        });
  
    }, []);

    const modalClick = (num) => {
        setOpenModal(true);
        setData(careerData[num])
        // setData(num)
    }

    const toggleItem = (idx) => {
        setOpenIndex(prev => prev === idx ? null : idx);
    }
    

    return (
        <section id="career" className="career">
            <div className="container">
                <div className="career_title">CAREER</div>
                <section ref={headerRef}>
                <div className='subtitle'>
                    <h2>EDUCATION</h2>
                </div>
                <div className='career_wl'>
                    <h3>대림대학교</h3>
                </div>
                <div className='career_wr'>
                    <h4>스마트소프트웨어학과(전공심화과정)</h4>
                    <h6>2020.06 ~ 2020.10</h6>
                    <h4>모바일인터넷과(3년과정)</h4>
                    <h6>2017.06 ~ 2021.2</h6>
                </div>
                <div className='cb'></div>
                <div className='mb20'></div>
                <div className='career_wl'>
                    <h3>남부여성발전센터 프로그램</h3>
                </div>
                <div className='career_wr'>
                    <h4>웹 기반 클라우드 과정 수료</h4>
                    <h6>2020.06 ~ 2020.10</h6>
                </div>
                <div className='cb'></div>
                <div className='line'></div>

                <div className='subtitle'>
                    <h2>CERTIFICATE</h2>
                </div>
                <div className='career_wl'>
                    <h3>네트워크관리사 2급</h3>
                </div>
                <div className='career_wr'>
                    <h6>2020.10</h6>
                </div>
                <div className='cb'></div>
                <div className='mb20'></div>
                <div className='career_wl'>
                    <h3>리눅스마스터 2급</h3>
                </div>
                <div className='career_wr'>
                    <h6>2020.07</h6>
                </div>
                <div className='cb'></div>
                <div className='line'></div>

                <div className='subtitle'>
                    <h2>CAREER</h2>
                </div>
                <div className='career_wl'>
                    <h3>(주)오투오즈</h3>
                </div>
                <div className='career_wr'>
                    <h4>FRONTEND/BACKEND 개발</h4>
                    <h6>2021.01 ~ 2023.7</h6>
                </div>
                <div className='cb'></div>
                <div className='mb20'></div>
                <div className="experience">
                    {careerData.map((c, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div className={`exp-row ${isOpen ? 'open' : ''}`} key={idx}>
                                <div className="exp-year">{c.period}</div>
                                <div className="exp-line" />
                                <div className="exp-content">
                                    <div className="exp-card">
                                        <div className="exp-header">
                                            <div>
                                                <h4 className="exp-title">{c.title ? c.title : (c.txt && c.txt[0]) ? c.txt[0] : 'Project'}</h4>
                                                {c.team && <div className="team-badge">{c.team}</div>}
                                            </div>
                                            <div className="exp-meta">{c.skill ? c.skill.join(' • ') : ''}</div>
                                        </div>
                                        <p className="exp-summary">{(c.txt && c.txt.length) ? c.txt.slice(1,2).join(' / ') : ''}</p>

                                        <div className="exp-actions">
                                            <button className="exp-btn" onClick={() => toggleItem(idx)} aria-expanded={isOpen}>{isOpen ? '닫기' : '열기'}</button>
                                            <button className="exp-btn ghost" onClick={() => modalClick(idx)}>자세히 보기</button>
                                        </div>

                                        <div className={`exp-details ${isOpen ? 'show' : ''}`}>
                                            {c.txt && (
                                                <div className="detail-block">
                                                    <h5>설명</h5>
                                                    <ul>
                                                        {c.txt.map((t, i) => <li key={i}>{t}</li>)}
                                                    </ul>
                                                </div>
                                            )}
                                            {c.role && (
                                                <div className="detail-block">
                                                    <h5>역할</h5>
                                                    <ul>
                                                        {c.role.map((r, i) => <li key={i}>{r}</li>)}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </section>
            </div>
            { openModal &&
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    >
                <CareerModal
                    open={openModal}
                    close={() => setOpenModal(false)}
                    data={data}
                />
                </Modal>
            }
        </section>
    );
};

export default Career;