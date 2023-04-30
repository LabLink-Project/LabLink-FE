import React, { useEffect } from 'react';
import SearchHeader from '../components/SearchHeader';
import right from 'src/assets/right.svg';
import triangle from 'src/assets/triangle.svg';
import {
  StPersonalPageStrong,
  StPersonalPageH2,
  StPersonalPageWrap,
  StPersonalPageUserWrap,
  StPersonalPageTemp,
  StPersonalPageList,
} from '../styles/PersonalPage.styled';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import FooterNav from '../components/FooterNav';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isSignIn } from 'src/hooks/useCheckToken';

function PersonalPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn()) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/auth/signin/user');
    }
  }, []);

  const account = useSelector(state => {
    return state;
  });

  const { nickname, ...rest } = account.accountHandler;

  return (
    <StPersonalPageWrap>
      <SearchHeader title="마이페이지" />
      <StPersonalPageUserWrap sort="space-between">
        <StPersonalPageH2>
          안녕하세요! <StPersonalPageStrong>{nickname}님</StPersonalPageStrong>
        </StPersonalPageH2>
        <div>
          <Link to={URI.mypage.user.editInfo}>내 정보 수정</Link>
          <img
            src={right}
            alt="더보기"
          />
        </div>
      </StPersonalPageUserWrap>
      <StPersonalPageTemp>나의 온도</StPersonalPageTemp>
      <ul>
        <StPersonalPageList>
          <Link to={URI.mypage.user.apply}>내 실험 관리</Link>
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
        <StPersonalPageList>
          {/* 신청서 작성 구현 완료시 수정 */}
          <Link to="#">신청서 작성</Link>
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
        <StPersonalPageList>
          {/* 설정 부분 구현 완료시 수정 */}
          <Link to="#">설정</Link>
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
      </ul>
      <FooterNav />
    </StPersonalPageWrap>
  );
}

export default PersonalPage;
