import React from 'react';
import {
  StParagraph,
  StReadStudyDetailInfoTitle,
  StReadStudyDetailInfoWrap,
} from 'src/UI/styles/ReadStudyDetail.styled';
import {
  formatAge,
  formatBenefit,
  formatGender,
  isNull,
} from 'src/utils/parseData';
import { StFlexBox } from 'src/UI/styles/common.styled';
import personIcon from 'src/assets/design/StudyDetail/Person.svg';
import styled from 'styled-components';

function Applicant({ gender, minAge, maxAge, benefit }) {
  return (
    <StReadStudyDetailInfoWrap>
      <StMarginWrap>
        <StImg
          src={personIcon}
          alt="사람 아이콘"
        />
        <StReadStudyDetailInfoTitle>지원자 조건</StReadStudyDetailInfoTitle>
      </StMarginWrap>

      <StParagraph>성별 : {formatGender(gender)}</StParagraph>
      <StParagraph>연령 : {formatAge(minAge, maxAge)}</StParagraph>
      {isNull(benefit) ? null : (
        <StParagraph>우대사항 : {formatBenefit(benefit)}</StParagraph>
      )}
    </StReadStudyDetailInfoWrap>
  );
}

export default Applicant;

const StImg = styled.img`
  margin-right: 4px;
`;

const StMarginWrap = styled(StFlexBox)`
  margin-bottom: 16px;
`;
