import React from 'react';
import "./project.css";
import Grid from '@material-ui/core/Grid';


const Project = () => {

    return (
        <div id="project" className="project">
            <div className="project_title">PROJECTS</div>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{height:"100%"}}>
                      <Grid item xs={7} sm={5}>
                        <div className="project_font">project1</div>
                        <div className="project_paper1">
                          <img src={process.env.PUBLIC_URL + '/의약품.png'} width="80%" height="100%"/>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={7}>
                        <div>
                          <div className="project_font1">프로젝트</div>
                          <div className="project_font2">MEDITORY</div>
                          <div className="project_font1">기획의도</div>
                          <div className="project_font2">약국외에도 의약품을 판매하는 곳들이 늘어나고 있어서 부위별 약품 정보를 사용자들이 보다 편리하게 알고 사용할 수 있는 앱을 만들어 보고 싶었다.</div>
                          <div className="project_font1">구현기능</div>
                          <div className="project_font2">- 공공 데이터 API 약품 정보를 받아와 xml파싱하기</div>
                          <div className="project_font2">- 의약품 검색기능 구현</div>
                          <div className="project_font2">- 의약품 카테고리별 구현</div>
                          <div className="project_font2">- 의약품 정보, 효능 구현</div>
                          <div className="project_font3"><a herf="https://github.com/Pheejung/Android">https://github.com/Pheejung/Android</a></div>
                        </div>
                      </Grid>
                      <Grid item xs={7} sm={5}>
                        <div className="project_font">project2</div>
                        <div className="project_paper2">
                          <img src={process.env.PUBLIC_URL + '/코디가이드1.gif'} width="100%" height="100%" />
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={7}>
                        <div>
                          <div className="project_font1">프로젝트</div>
                          <div className="project_font2">CODY GUIDE</div>
                          <div className="project_font1">기획의도</div>
                          <div className="project_font2">일상생활 또는 해외여행시 제일 많이 하는 고민이 날씨에 맞는 옷차림이라고 생각하여 날씨에 맞는 옷차림 가이드를 만들었다.</div>
                          <div className="project_font1">구현기능</div>
                          <div className="project_font2">- 구글맵API와 날씨API를 연동하여 날씨에 맞는 코디 가이드 구현</div>
                          <div className="project_font2">- 로그인/회원가입 기능 구현</div>
                          <div className="project_font2">- 코디 게시판 구현</div>
                          <div className="project_font2">- 코디 갤러리 구현</div>
                          <div className="project_font3">https://github.com/codyguide/front-end</div>
                          <div className="project_font3">https://github.com/codyguide/back-end</div>
                          <div className="project_font3">시연영상: https://bit.ly/3m0zSni</div>
                        </div>
                      </Grid>
                </Grid>
            </div>
    );
}; 

export default Project;