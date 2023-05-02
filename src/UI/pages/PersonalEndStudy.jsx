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
import { URI } from 'src/shared/URIs';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function PersonalEndStudy() {
  const nav = useNavigate();
  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>완료한 실험</StPersonalRequestTitle>
        <StPersonalRequestDiv>최근 1개월</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        <li>
          <StPersonalRequestListWrap>
            <StPersonalRequestHeaderWrap sort="space-between">
              <StPersonalRequestCompany>(주)항해99</StPersonalRequestCompany>
              <StPersonalRequestTime>
                5월5일까지 피드백 작성 가능
              </StPersonalRequestTime>
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
                온라인 | 4월 12일 완료
              </StPersonalRequestStudyPay>
              <Button
                variant="dark"
                style={{
                  height: '100%',
                  fontSize: '15px',
                }}
                onClick={() => nav(`${URI.mypage.user.feedback}/1`)}
              >
                피드백 작성
              </Button>
            </StPersonalRequestHeaderWrap>
          </StPersonalRequestListWrap>
        </li>
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default PersonalEndStudy;
