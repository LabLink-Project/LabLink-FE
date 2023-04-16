import React from 'react';
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

function PersonalPage() {
  return (
    <StPersonalPageWrap>
      <SearchHeader title="마이페이지" />
      <StPersonalPageUserWrap sort="space-between">
        <StPersonalPageH2>
          안녕하세요! <StPersonalPageStrong>www님</StPersonalPageStrong>
        </StPersonalPageH2>
        <div>
          <span>내정보 수정 </span>
          <img
            src={right}
            alt="더보기"
          />
        </div>
      </StPersonalPageUserWrap>
      <StPersonalPageTemp>나의 온도</StPersonalPageTemp>
      <ul>
        <StPersonalPageList>
          내 실험 관리
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
        <StPersonalPageList>
          신청서 작성
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
        <StPersonalPageList>
          설정
          <img
            src={triangle}
            alt=""
          />
        </StPersonalPageList>
      </ul>
    </StPersonalPageWrap>
  );
}

export default PersonalPage;
