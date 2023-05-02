import React from 'react';
import { Link } from 'react-router-dom';

import right from 'src/assets/right.svg';
import {
  StHomeHeaderIcon,
  StHomeHeaderLink,
  StHomeHeaderWrap,
} from '../styles/HomeHeader.styled';
import { URI } from 'src/shared/URIs';
import Search from 'src/assets/Search.svg';
import Alarm from 'src/assets/Alarm.svg';
import { deleteCookie } from 'src/utils/cookieHandler';
import styled from 'styled-components';
import { serviceColors } from 'src/shared/designColors';
import { soonDevelop } from 'src/utils/soonDevelop';
import { useAccountState } from 'src/hooks/useReduxState';

function HomeHeader() {
  const nickname = useAccountState('nickname');

  const signOutHandler = () => {
    deleteCookie('token');
    window.location.reload();
  };

  return (
    <StHomeHeaderWrap sort="space-between">
      <div>
        {nickname ? (
          <div>
            <strong>{nickname}</strong>님 환영합니다
            <Button onClick={signOutHandler}>로그아웃</Button>
          </div>
        ) : (
          <>
            {' '}
            <StHomeHeaderLink to={URI.auth.signin.user}>
              로그인
            </StHomeHeaderLink>{' '}
            해주세요{' '}
            <img
              src={right}
              alt="오른쪽 표시"
            />
          </>
        )}
      </div>
      <div>
        <Link to={URI.crud.search}>
          <StHomeHeaderIcon
            src={Search}
            alt="검색 버튼"
          />
        </Link>
        {/* 알림 페이지 구현 후 수정 필요 */}
        <Link
          to="/"
          onClick={soonDevelop}
        >
          <StHomeHeaderIcon
            src={Alarm}
            alt="알람 버튼"
          />
        </Link>
      </div>
    </StHomeHeaderWrap>
  );
}

const Button = styled.button`
  margin-left: 5px;
  color: ${serviceColors.secondary};
`;

export default HomeHeader;
