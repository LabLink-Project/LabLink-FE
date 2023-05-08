import React, { useEffect, useRef, useState } from 'react';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import { StFlexBox } from '../styles/common.styled';
import styled, { css } from 'styled-components';
import { StudyColors } from 'src/shared/Colors';
import tutorialBanner from 'src/assets/design/banner/tutorialBanner.svg';
import feedbackBanner from 'src/assets/design/banner/feedbackBanner.svg';
import { URI } from 'src/shared/URIs';
import { Link } from 'react-router-dom';
import { StMarginWrap } from '../styles/SharedStyle/MarginWrap.styled';

function HomeBanner() {
  const images = useRef([tutorialBanner, feedbackBanner]);
  const urls = useRef([URI.banner.tutorial, URI.banner.feedback]);

  const imgSize = useRef(images.current.length);

  const [current, setCurrent] = useState(0);

  // img 앞에 추가 : unshift
  // img 뒤에 추가 : push
  const moveSlide = i => {
    let nextIndex = current + i;
    if (nextIndex >= imgSize.current) nextIndex = 0;
    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    setCurrent(nextIndex);
  };

  const onClickPagenationHandler = index => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      moveSlide(1);
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <div>
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
                <Link
                  to={urls.current[i]}
                  key={i}
                >
                  <StImage src={img} />
                </Link>
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
              onClick={() => onClickPagenationHandler(i)}
            />
          );
        })}
      </StFlexBox>
    </div>
  );
}

const StCarouselWrap = styled.div`
  width: 375px;
  /* height: 200px; */
  overflow: hidden;
  position: relative;
`;

const StImage = styled.img`
  // image로 하면 bg에 full fill
  width: 375px;
  /* height: 200px; */

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
