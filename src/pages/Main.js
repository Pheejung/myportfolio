import React, { useEffect, useState } from 'react';
import "./main.css";

const Main = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = 'Welcome!';

    useEffect(() => {
        const typingInterval = setInterval(() => {
        setBlogTitle((prevTitleValue) => {
            setBlogTitle(prevTitleValue + completionWord[count]);
            // let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
            setCount(count + 1);
        });
        }, 100);

        if (count === completionWord.length) {
            clearInterval(typingInterval);
            // setCount(0);
            // setBlogTitle('');
            }

        return () => {
            clearInterval(typingInterval);
        };
    });

    const [blogTitle1, setBlogTitle1] = useState('');
    const [count1, setCount1] = useState(0);
    const completionWord1 = "HEEJUNG'S PORTFOLIO";

    useEffect(() => {
        const typingInterval = setInterval(() => {
        setBlogTitle1((prevTitleValue) => {
            setBlogTitle1(prevTitleValue + completionWord1[count1]);
            // let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
            setCount1(count1 + 1);
        });
        }, 100);

        if (count1 === completionWord1.length) {
            clearInterval(typingInterval);
            // setCount(0);
            // setBlogTitle('');
            }

        return () => {
            clearInterval(typingInterval);
        };
    });

    


    return (
        <section id="main" className="main">
            <section className='main-box'>
                <div className="main_font">
                    <span>{blogTitle}</span>
                </div>
                {/* <div className="main_font">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span>!</span>
                </div> */}
                <div className="main_font1">{blogTitle1}</div>
            </section>
            {/* <div className="main_font2">{blogTitle}</div> */}
            <div className="main_font2">새로운 배움에 도전하고 끊임없이 발전하는 개발자, 박희정입니다.</div>
            {/* <div className="main_font"><p>새로운 배움에 도전하고 끊임없이 발전하는 개발자, 박희정입니다.</p></div> */}
        </section>
    );
};

export default Main;