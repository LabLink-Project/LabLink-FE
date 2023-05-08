import React from 'react';
import { StFooterNavList, StFooterNavUl } from '../styles/FooterNav.styled';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { useAccountState } from 'src/hooks/useReduxState';

import homeIcon from 'src/assets/design/home/Home_off.svg';
import chatIcon from 'src/assets/design/home/Chat_off.svg';
import bookmarkIcon from 'src/assets/design/home/Favorite_off_24.svg';
import userIcon from 'src/assets/design/home/User_off.svg';

function FooterNav() {
  const role = useAccountState('role');

  return (
    <footer>
      <nav>
        <StFooterNavUl>
          <StFooterNavList>
            <Link to={URI.crud.home}>
              <img
                src={homeIcon}
                alt="홈 바로가기"
              />
            </Link>
          </StFooterNavList>
          <StFooterNavList>
            <Link to={URI.crud.bookmark}>
              <img
                src={bookmarkIcon}
                alt="북마크 바로가기"
              />
            </Link>
          </StFooterNavList>
          <StFooterNavList>
            <Link to={URI.mypage.company.createStudy}>
              <img
                src={chatIcon}
                alt="홈 바로가기"
              />
            </Link>
          </StFooterNavList>
          <StFooterNavList>
            <Link
              to={
                role === 'USER' ? URI.mypage.user.home : URI.mypage.company.home
              }
            >
              <img
                src={userIcon}
                alt="홈 바로가기"
              />
            </Link>
          </StFooterNavList>
        </StFooterNavUl>
      </nav>
    </footer>
  );
}

export default FooterNav;
