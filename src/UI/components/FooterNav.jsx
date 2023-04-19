import React from 'react';
import { StFooterNavList, StFooterNavUl } from '../styles/FooterNav.styled';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';

function FooterNav() {
  return (
    <footer>
      <nav>
        <StFooterNavUl>
          <StFooterNavList>
            <Link to={URI.crud.home}>홈</Link>
          </StFooterNavList>
          <StFooterNavList>
            <Link to={URI.crud.bookmark}>찜목록</Link>
          </StFooterNavList>
          {/* 채팅 구현 후 경로 설정하기 */}
          <StFooterNavList>
            <Link to="/">채팅</Link>
          </StFooterNavList>
          <StFooterNavList>
            <Link to={URI.mypage.user.home}>내 정보</Link>
          </StFooterNavList>
        </StFooterNavUl>
      </nav>
    </footer>
  );
}

export default FooterNav;
