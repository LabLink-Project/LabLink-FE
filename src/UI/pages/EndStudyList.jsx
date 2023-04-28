import React from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StEndStudyListButton,
  StEndStudyListButtonWrap,
  StEndStudyListCount,
  StEndStudyListDate,
  StEndStudyListDateWrap,
  StEndStudyListDivWrap,
  StEndStudyListFeedbackButton,
  StEndStudyListFlexWrap,
  StEndStudyListOnline,
  StEndStudyListOnlineFlexWrap,
  StEndStudyListPay,
  StEndStudyListPayStrong,
  StEndStudyListQueryButton,
  StEndStudyListTitle,
  StEndStudyListWrap,
} from '../styles/EndStudyList.styled';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';

function EndStudyList() {
  const nav = useNavigate()

  return (
    <StEndStudyListWrap>
      <SearchHeader title="실험 종료된 공고 확인" />
      <StEndStudyListButtonWrap>
        <StEndStudyListButton>1개월</StEndStudyListButton>
        <StEndStudyListButton>3개월</StEndStudyListButton>
        <StEndStudyListButton>6개월</StEndStudyListButton>
        <StEndStudyListButton>12개월</StEndStudyListButton>
      </StEndStudyListButtonWrap>
      <StEndStudyListDateWrap>
        {/* 날짜 표시 방법 수정 */}
        {/* 달력 이미지 추가 */}
        <StEndStudyListDate type="date" />
        <StEndStudyListDate type="date" />
        <StEndStudyListQueryButton
          type="button"
          value="조회"
        />
      </StEndStudyListDateWrap>
      <StEndStudyListDivWrap>
        <StEndStudyListOnlineFlexWrap sort="space-between">
          <StEndStudyListOnline>온라인</StEndStudyListOnline>
          <StEndStudyListCount>2명 작성</StEndStudyListCount>
        </StEndStudyListOnlineFlexWrap>
        <StEndStudyListTitle>APP 사용성테스트 지원자 모집</StEndStudyListTitle>
        <StEndStudyListFlexWrap sort="space-between">
          <div>
            <StEndStudyListPay>
              <StEndStudyListPayStrong>30000</StEndStudyListPayStrong>원
            </StEndStudyListPay>
            <StEndStudyListPay>4월 12일 실험마감</StEndStudyListPay>
          </div>
          <StEndStudyListFeedbackButton
          // onClick={()=>nav(`${URI.mypage.company.feedback}/id`)}
          >
            피드백 확인
          </StEndStudyListFeedbackButton>
        </StEndStudyListFlexWrap>
      </StEndStudyListDivWrap>
    </StEndStudyListWrap>
  );
}

export default EndStudyList;
