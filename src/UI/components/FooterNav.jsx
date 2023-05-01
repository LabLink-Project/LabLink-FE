import React from 'react';
import { StFooterNavList, StFooterNavUl } from '../styles/FooterNav.styled';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { useSelector } from 'react-redux';

function FooterNav() {
  const accountState = useSelector(state => state);
  const { nickname, role } = accountState.accountHandler;

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
          {/* 글 작성 위치 구현되면 채팅으로 변경하기 */}
          {/* 채팅 구현 후 경로 설정하기 */}
          <StFooterNavList>
            {nickname ? (
              <>
                <Link to={URI.mypage.company.createStudy}>글 작성</Link>
              </>
            ) : (
              <>
                <Link to={URI.auth.signin.user}>글 작성</Link>
              </>
            )}
          </StFooterNavList>
          <StFooterNavList>
            {role === 'USER' ? (
              <Link to={URI.mypage.user.home}>내 정보</Link>
            ) : (
              <Link to={URI.mypage.company.home}>내 정보</Link>
            )}
          </StFooterNavList>
        </StFooterNavUl>
      </nav>
    </footer>
  );
}

export default FooterNav;
