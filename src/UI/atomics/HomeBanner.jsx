import React from 'react';
import {
  StHomeBannerCircle,
  StHomeBannerImg,
} from '../styles/HomeBanner.styled';
import { StFlexBox } from '../styles/common.styled';
import lab from 'src/assets/lab.jpg';

function HomeBanner() {
  return (
    <>
      <StHomeBannerImg
        src={lab}
        alt="배너 영역"
      />
      {/* 이미지 개수만큼 구현 */}
      <StFlexBox sort="center">
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox>
    </>
  );
}

export default HomeBanner;
