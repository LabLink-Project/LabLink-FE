import React from 'react';
import {
  StReadStudyDetailInfoParagraph,
  StReadStudyDetailRequireTitle,
  StReadStudyDetailRequireWrap,
} from 'src/UI/styles/ReadStudyDetail.styled';
import { StFlexBox } from 'src/UI/styles/common.styled';
import labIcon from 'src/assets/design/StudyDetail/Lab.svg';
import styled from 'styled-components';

function StudyInfomation({ infomation }) {
  return (
    <StReadStudyDetailRequireWrap>
      <StMarginWrap>
        <StImg
          src={labIcon}
          alt="연구 소개 아이콘"
        />
        <StReadStudyDetailRequireTitle>연구 소개</StReadStudyDetailRequireTitle>
      </StMarginWrap>
      <StReadStudyDetailInfoParagraph>
        {infomation}
      </StReadStudyDetailInfoParagraph>
    </StReadStudyDetailRequireWrap>
  );
}

export default StudyInfomation;

const StImg = styled.img`
  margin-right: 4px;
`;

const StMarginWrap = styled(StFlexBox)`
  margin-bottom: 16px;
`;
