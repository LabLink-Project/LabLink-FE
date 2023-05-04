import React, { useEffect, useState } from 'react';
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
import { cookies } from 'src/shared/Cookie';
import { useNavigate } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import { StCompanyPageCollapse } from '../styles/CompanyPage.styled';

function PersonalPage() {
  const nav = useNavigate();

  const [open, setOpen] = useState(false);

  const account = useSelector(state => {
    return state;
  });
  const { nickname, ...rest } = account.accountHandler;

  // 비로그인 상태면 못 들어오게 막기
  useEffect(() => {
    const token = cookies.get('token');
    if (!token) {
      alert('로그인이 필요한 페이지입니다.');
      nav(URI.crud.home);
    }
  }, []);

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
      {/* <StPersonalPageTemp>나의 온도</StPersonalPageTemp> */}
      <ul>
        <StPersonalPageList
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <p>내 실험 관리</p>
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
        <Collapse in={open}>
          <div>
            <StCompanyPageCollapse id="example-collapse-text">
              <Link to={URI.mypage.user.applyStudy}>신청한 실험</Link>
              <Link to={URI.mypage.user.ongoingStudy}>진행할 실험</Link>
              <Link to={URI.mypage.user.endStudy}>완료한 실험</Link>
            </StCompanyPageCollapse>
          </div>
        </Collapse>
        <StPersonalPageList>
          {/* 신청서 작성 구현 완료시 수정 */}
          {/* <Link to="#">신청서 작성</Link>
          <img
            src={triangle}
            alt=""
          /> */}
        </StPersonalPageList>
        <StPersonalPageList>
          {/* 설정 부분 구현 완료시 수정 */}
          {/* <Link to="#">설정</Link>
          <img
            src={triangle}
            alt=""
          /> */}
        </StPersonalPageList>
      </ul>
      <FooterNav />
    </StPersonalPageWrap>
  );
}

export default PersonalPage;
