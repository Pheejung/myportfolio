import React from 'react';
import "./project.css";

const projects = [
    {
    title: 'CODY GUIDE',
    desc: '날씨 기반 코디 가이드 앱 (구글맵, 날씨 API 연동, 게시판/갤러리)',
    img: process.env.PUBLIC_URL + '/코디가이드1.gif',
    link: 'https://bit.ly/3m0zSni',
    tags: ['React', 'Django']
  },
  {
    title: 'MEDITORY',
    desc: '약품 정보를 보다 편리하게 제공하는 모바일 앱 (공공데이터 활용, 검색/카테고리)',
    img: process.env.PUBLIC_URL + '/의약품.png',
    link: 'https://github.com/Pheejung/Android',
    tags: ['Android', 'Java']
  }
];

const Project = () => {
  return (
    <section id="project" className="project">
      <div className="container">
        <h2 className="project_title">Projects</h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project-item" key={i}>
              <a className="project-media" href={p.link} target="_blank" rel="noreferrer">
                <img src={p.img} alt={`${p.title} screenshot`} />
                <div className="project-overlay">
                  <div className="overlay-title">{p.title}</div>
                  <div className="overlay-desc">{p.desc}</div>
                </div>
              </a>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;