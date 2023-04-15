import React from 'react';
import {
  StHomeBannerCircle,
  StHomeBannerImg,
} from '../styles/HomeBanner.styled';
import { StFlexBox } from '../styles/common.styled';

function HomeBanner() {
  return (
    <>
      <StHomeBannerImg
        src=""
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
