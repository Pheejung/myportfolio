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
    

    return (
        <section id="career" className="career">
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
                    <h6>2019.12 ~ 2020.10</h6>
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>기간</th>
                            <th>기술스택</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>한국국제냉난방공조전 2024 웹 유지보수</td>
                            <td>2023.06 ~ 2023.07</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular.js</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(0)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>소전서림 앱 유지보수</td>
                            <td>2023.04 ~ 2023.07</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React-native</button>
                                <button className="bluebtn" style={{margin: 5}}>Spring</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(1)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>한국냉동공조안전관리원 관리자 웹 개발</td>
                            <td>2023.04 ~ 2023.07</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(2)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>한국냉동공조산업협회 웹 유지보수</td>
                            <td>2023.02 ~ 2023.07</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(3)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Acims 에어컨 설치시스템 앱/웹 개발</td>
                            <td>2023.01 ~ 2023.02<br />2023.02 ~ 2023.03</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React ionic</button>
                                <button className="redbtn" style={{margin: 5}}>React</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(4)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>바이크마트 중고거래 ios 앱 개발</td>
                            <td>2022.10 ~ 2022.11</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular ionic</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(5)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>사주인 - 작명가앱 Android/ios 개발</td>
                            <td>2021.09 ~ 2021.11<br />2022.08 ~ 2022.09</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular ionic</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(6)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>한국에너지기기산업진흥회 관리자 시스템 개발/유지보수</td>
                            <td>2022.03 ~ 2023.07</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(7)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>퓨쳐시스템 ITU/ITM GUI 개발 - CC인증 <br />퓨쳐시스템 ITU/ITM GUI 개발 - ITU 2차 작업</td>
                            <td>2021.05 ~ 2021.11 <br /> 2022.02 ~ 2023.06</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(8)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>남양주도시공사 차세대 회원관리시스템 관리자 화면 구축</td>
                            <td>2022.01 ~ 2022.06</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React</button>
                                <button className="bluebtn" style={{margin: 5}}>Spring</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(9)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>심플솔루션 시큐어에 UI_UX 개선</td>
                            <td>2021.11 ~ 2021.12</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>React</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(10)}>열기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>바이크마트 어드민 / 쇼핑몰 웹 개발</td>
                            <td>2021.02 ~ 2021.06</td>
                            <td>
                                <button className="redbtn" style={{margin: 5}}>Angular</button>
                                <button className="bluebtn" style={{margin: 5}}>PHP</button>
                            </td>
                            <td>
                                <button className="greenbtn cp" style={{margin: 5}} onClick={() => modalClick(11)}>열기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
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