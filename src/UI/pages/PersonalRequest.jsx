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

function PersonalRequest() {
  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>내가 신청한 실험</StPersonalRequestTitle>
        <StPersonalRequestDiv>최근 1주일</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        <li>
          <StPersonalRequestListWrap>
            <StPersonalRequestHeaderWrap sort="space-between">
              <StPersonalRequestCompany>(주)항해99</StPersonalRequestCompany>
              <StPersonalRequestTime>2시간 전 지원</StPersonalRequestTime>
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
            <StPersonalRequestStudyPay>
              온라인 | 4월 12일 마감
            </StPersonalRequestStudyPay>
          </StPersonalRequestListWrap>
        </li>
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default PersonalRequest;
