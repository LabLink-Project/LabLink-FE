import React from 'react';
import SearchHeader from '../components/SearchHeader';

import {
  StPersonalRequestCompany,
  StPersonalRequestDiv,
  StPersonalRequestHeaderWrap,
  StPersonalRequestListWrap,
  StPersonalRequestPaddingWrap,
  StPersonalRequestStudyPay,
  StPersonalRequestStudyPayStrong,
  StPersonalRequestStudyTitle,
  StPersonalRequestTime,
  StPersonalRequestTitle,
  StPersonalRequestWrap,
} from '../styles/PersonalRequest.styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';

function CompanyOngoingStudy() {
  const nav = useNavigate();
  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>진행중인 공고</StPersonalRequestTitle>
        <StPersonalRequestDiv>전체보기</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        <li>
          <StPersonalRequestListWrap>
            <StPersonalRequestHeaderWrap sort="space-between">
              <StPersonalRequestCompany>(주)항해99</StPersonalRequestCompany>
              <StPersonalRequestTime>현재 6명 지원</StPersonalRequestTime>
            </StPersonalRequestHeaderWrap>
            <StPersonalRequestStudyTitle>
              APP 사용성테스트 지원자 모집
            </StPersonalRequestStudyTitle>
            <StPersonalRequestStudyPay>
              <StPersonalRequestStudyPayStrong>
                30000
              </StPersonalRequestStudyPayStrong>
              원
            </StPersonalRequestStudyPay>
            <StPersonalRequestHeaderWrap sort="space-between">
              <StPersonalRequestStudyPay>
                온라인 | 4월 12일 진행
              </StPersonalRequestStudyPay>
              <Button
                variant="dark"
                style={{
                  height: '100%',
                  fontSize: '15px',
                }}
                onClick={() => nav(`${URI.mypage.company.applicant}/1`)}
              >
                지원자 확인
              </Button>
            </StPersonalRequestHeaderWrap>
          </StPersonalRequestListWrap>
        </li>
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default CompanyOngoingStudy;
