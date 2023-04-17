import React from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import {
  StSearchHeaderBackButton,
  StSearchHeaderNotification,
  StSearchHeaderTitle,
  StSearchHeaderWrap,
} from 'src/UI/styles/SearchHeader.styled';

// 합성 컴포넌트 패턴으로 변경

// 구현해야할 종류
// 1. 뒤로가기 -> 회원가입 로직
// 2. 뒤로가기 + 알람 -> 검색/조회
// 3. 뒤로가기 + 타이틀 + 알람 -> 찜, 채팅, 마이페이지 등등 = 나머지 다
// 4. 로그인/회원이름 + 검색 + 알림 -> 홈 화면

function SearchHeader({ title }) {
  return (
    <StSearchHeaderWrap sort="space-between">
      <StFlexBox>
        <StSearchHeaderBackButton>뒤로가기</StSearchHeaderBackButton>
        <StSearchHeaderTitle>{title}</StSearchHeaderTitle>
      </StFlexBox>
      <StSearchHeaderNotification>알림</StSearchHeaderNotification>
    </StSearchHeaderWrap>
  );
}

export default SearchHeader;
