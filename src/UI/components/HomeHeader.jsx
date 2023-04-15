import React from 'react';

import right from 'src/assets/right.svg';
import {
  StHomeHeaderIcon,
  StHomeHeaderLink,
  StHomeHeaderWrap,
} from '../styles/HomeHeader.styled';

function HomeHeader() {
  return (
    <StHomeHeaderWrap sort="space-between">
      <div>
        <StHomeHeaderLink to="/login/user">로그인</StHomeHeaderLink> 해주세요
        <img
          src={right}
          alt="오른쪽 표시"
        />
      </div>
      <div>
        <StHomeHeaderIcon>검색</StHomeHeaderIcon>
        <StHomeHeaderIcon>알림</StHomeHeaderIcon>
      </div>
    </StHomeHeaderWrap>
  );
}

export default HomeHeader;
