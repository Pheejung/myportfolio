import React, { useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

export const CareerModal = ( props ) => {

  useEffect(() => {
  }, [props.open]);

  return (
    <section className="modal">
      <section className="modal-wrap modal-calc">
          <header className="modal-header">
            <div className="modal-title"></div>
            <Button className="close-btn" onClick={props.close}>
              <CloseIcon style={{ color: '#fff', fontSize: '28px' }}></CloseIcon>
            </Button>
          </header>

          <section className="modal-body">
          <h3>🗓️ 진행 기간</h3>
          <ul>
              <li>{props.data.period}</li>
          </ul>
          <h3> 📝 설명</h3>
          <ul>
              {props.data.txt.map((item, i) => {
                  return (
                    <li key={i}>{item}</li>
                  )
              })}
          </ul>
          <h3>🧑‍💻 역할</h3>
          <ul>
              {props.data.role.map((item, i) => {
                  return (
                    <li key={i}>{item}</li>
                  )
              })}
          </ul>
          <h3>💡 기술 스택</h3>
          <ul>
              {props.data.skill.map((item, i) => {
                  return (
                    <li key={i}>{item}</li>
                  )
              })}
          </ul>
          </section>

          <footer className="modal-footer">
            <div className="modal-footer-center">
              <button className="btn cp" onClick={props.close}>확인</button>  
            </div>
          </footer>
      </section>
    </section>
  )
}

export default CareerModal;