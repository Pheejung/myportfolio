import React from 'react';
import "./main.css";

const Main = () => {
    return (
        <main id="main" className="main container">
            <section className="hero-hero">
                <div className="hero-inner">
                    <h1 className="hero-name">안녕하세요, 프론트엔드 개발자 박희정입니다.</h1>
                    <p className="hero-tag">사용성과 성능을 고려한 깔끔한 인터페이스를 만듭니다.</p>

                    <div className="hero-actions">
                        <a className="btn primary" href="#project">프로젝트 보기</a>
                        <a className="btn outline" href="#contact">연락하기</a>
                    </div>
                </div>
            </section>

            <section className="features container">
                <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <h4>퍼포먼스 최적화</h4>
                    <p>번들과 렌더링을 고려한 빠른 웹을 만듭니다.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">🎨</div>
                    <h4>디자인 시스템</h4>
                    <p>재사용 가능한 컴포넌트로 일관된 UI를 제공합니다.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">🤝</div>
                    <h4>협업과 문서화</h4>
                    <p>명확한 코드와 문서로 팀 생산성을 높입니다.</p>
                </div>
            </section>
        </main>
    )
}

export default Main;