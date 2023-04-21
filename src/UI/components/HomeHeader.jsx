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
import { useSelector } from 'react-redux';

function HomeHeader() {
  const account = useSelector(state => {
    return state;
  });

  const { nickname, ...rest } = account.accountHandler;

  return (
    <StHomeHeaderWrap sort="space-between">
      <div>
        {nickname ? (
          <>
            <strong>{nickname}</strong>님 환영합니다
          </>
        ) : (
          <>
            {' '}
            <StHomeHeaderLink to={URI.auth.signin.user}>
              로그인
            </StHomeHeaderLink>{' '}
            해주세요
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
        <Link to="/">
          <StHomeHeaderIcon
            src={Alarm}
            alt="알람 버튼"
          />
        </Link>
      </div>
    </StHomeHeaderWrap>
  );
}

export default HomeHeader;
