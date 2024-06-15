import React from 'react';
import './main.css';
import LogoImg from '../assets/images/logo_letter.png';
import introImage1 from '../assets/images/introImage1.png';
import introImage2 from '../assets/images/introImage2.png';
import mockUpImage1 from '../assets/images/mockUpImage1.png';
import mockUpImage2 from '../assets/images/mockUpImage2.png';

function Main() {
  return (
    <div className="main_container">
      <section className="section_wrap">
        <div className="img_wrap">
          <img src={LogoImg} alt="로고이미지" />
        </div>
        <div className="headline_wrap">
          <h1 className="headline1">
            쉽고 간편한 재고 관리, <b>맛있는 재고</b>와 함께 시작해요!
          </h1>
        </div>
        <div className="about_wrap">
          <button type="button" className="about_btn">
            ABOUT
          </button>
        </div>
      </section>
      <section className="section_wrap">
        <div className="section_title">
          <p>
            매일 엑셀 파일에 정리했던 재고를 <br /> 맛있는 재고에서 간편하게{' '}
            <b>입력</b>하고, <br /> 남은 수량을 <b>예측</b>할 수 있어요.{' '}
          </p>
        </div>
        <div className="subSection_wrap">
          <div className="subSection_left">
            <img
              width="400"
              height="469"
              src={introImage1}
              alt="인트로이미지"
            />
          </div>
          <div className="subSection_right">
            <div className="headline3">
              <h3>
                오늘의 발주량을 작성하고 현재고를 <br /> 한눈에 보기 쉽게
              </h3>
            </div>
            <img width="480" height="170" src={mockUpImage1} alt="목업이미지" />
          </div>
        </div>
      </section>
      <section className="section_wrap">
        <div className="subSection_wrap">
          <div className="subSection_right">
            <div className="headline3_reverse">
              <h3>
                결과 그래프에서는 <br /> 평균 재고 사용량을 분석하고 <br />{' '}
                <b>예측</b>할 수 있어요.
              </h3>
            </div>
            <img width="520" height="320" src={mockUpImage2} alt="목업이미지" />
          </div>
          <div className="subSection_left">
            <img
              width="400"
              height="469"
              src={introImage2}
              alt="인트로이미지"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
