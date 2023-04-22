import React, { useEffect, useRef, useState } from 'react';
import {
  StHomeBannerCircle,
  StHomeBannerImg,
} from '../styles/HomeBanner.styled';
import { StFlexBox } from '../styles/common.styled';
import lab from 'src/assets/lab.jpg';
import styled, { css } from 'styled-components';
import { StudyColors } from 'src/shared/Colors';

function HomeBanner() {
  const images = useRef([
    'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black',
    'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black',
    'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white',
  ]);

  const imgSize = useRef(images.current.length);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  const moveSlide = i => {
    let nextIndex = current + i;
    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;
    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <>
      <div>
        <StCarouselWrap>
          <StCarouselButton
            onClick={() => {
              moveSlide(-1);
            }}
          >
            &lt;
          </StCarouselButton>
          <StCarouselFlexBox current={current}>
            {images.current.map((img, i) => {
              return (
                <StImage
                  key={i}
                  src={img}
                />
              );
            })}
          </StCarouselFlexBox>
          <StCarouselButton
            onClick={() => {
              moveSlide(1);
            }}
          >
            &gt;
          </StCarouselButton>
        </StCarouselWrap>
      </div>
      <StFlexBox sort="center">
        {images.current.map((_, i) => {
          return (
            <StHomeBannerCircle
              key={i}
              current={i === current ? true : false}
            />
          );
        })}
      </StFlexBox>
      {/* <StHomeBannerImg
        src={lab}
        alt="배너 영역"
      />
      <StFlexBox sort="center">
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox> */}
    </>
  );
}

const StCarouselWrap = styled.div`
  width: 335px;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const StImage = styled.img`
  // image로 하면 bg에 full fill
  width: 335px;
  height: 200px;

  // image로 contain 구현하기
  /* object-fit: contain; */
  flex: none;
`;

const StCarouselFlexBox = styled.div`
  display: flex;
  align-items: center;
  transition: margin-left 0.3s ease-out;

  ${props =>
    props.current &&
    css`
      margin-left: -${props.current}00%;
    `}
`;

const StCarouselButton = styled.button`
  position: absolute;
  top: 40%;
  margin: 0 5px;
  color: ${StudyColors.white};
  font-size: 24px;
  font-weight: 600;

  ${props =>
    props.children === '<' &&
    css`
      left: 0;
    `}
  ${props =>
    props.children === '>' &&
    css`
      right: 0;
    `};
`;

export default HomeBanner;
