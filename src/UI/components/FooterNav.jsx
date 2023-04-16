import React from 'react';
import { StFooterNavList, StFooterNavUl } from '../styles/FooterNav.styled';

function FooterNav() {
  return (
    <footer>
      <nav>
        <StFooterNavUl>
          <StFooterNavList>홈</StFooterNavList>
          <StFooterNavList>찜목록</StFooterNavList>
          <StFooterNavList>채팅</StFooterNavList>
          <StFooterNavList>내 정보</StFooterNavList>
        </StFooterNavUl>
      </nav>
    </footer>
  );
}

export default FooterNav;
