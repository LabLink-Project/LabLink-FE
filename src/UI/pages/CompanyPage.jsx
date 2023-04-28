import React, { useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import right from 'src/assets/right.svg';
import triangle from 'src/assets/triangle.svg';
import {
  StCompanyPageStrong,
  StCompanyPageH2,
  StCompanyPageWrap,
  StCompanyPageUserWrap,
  StCompanyPageList,
  StCompanyPageCollapse,
} from '../styles/CompanyPage.styled';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import FooterNav from '../components/FooterNav';
import { useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';

function CompanyPage() {
  const account = useSelector(state => {
    return state;
  });
  const { nickname, ...rest } = account.accountHandler;

  // 토글을 위한 state
  const [open, setOpen] = useState(false);

  return (
    <StCompanyPageWrap>
      <SearchHeader title="마이페이지" />
      <StCompanyPageUserWrap sort="space-between">
        <StCompanyPageH2>
          안녕하세요! <StCompanyPageStrong>{nickname}님</StCompanyPageStrong>
        </StCompanyPageH2>
        <div>
          <Link to={URI.mypage.user.editInfo}>내 정보 수정</Link>
          <img
            src={right}
            alt="더보기"
          />
        </div>
      </StCompanyPageUserWrap>
      <ul>
        <StCompanyPageList
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <p>내 공고 관리</p>
          <img
            src={triangle}
            alt=""
          />
        </StCompanyPageList>
        <Collapse in={open}>
          <div>
            <StCompanyPageCollapse id="example-collapse-text">
              <Link to={URI.mypage.company.ongoingStudy}>
                진행중인 공고 확인
              </Link>
              <Link to={URI.mypage.company.endStudy}>종료된 공고 확인</Link>
              <Link to={URI.mypage.company.studySchedule}>공고 스케줄확인</Link>
            </StCompanyPageCollapse>
          </div>
        </Collapse>
        <StCompanyPageList>
          <Link to={URI.mypage.company.createStudy}>공고 작성하기</Link>
          <img
            src={triangle}
            alt=""
          />
        </StCompanyPageList>
        <StCompanyPageList>
          {/* 설정 부분 구현 완료시 수정 */}
          <Link to="#">설정</Link>
          <img
            src={triangle}
            alt=""
          />
        </StCompanyPageList>
      </ul>
      <FooterNav />
    </StCompanyPageWrap>
  );
}

export default CompanyPage;
