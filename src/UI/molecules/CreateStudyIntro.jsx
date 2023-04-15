import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyTextarea,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';

function CreateStudyIntro() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">연구소개</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>

      <StCreateStudyWrap>
        <StCreateStudyTextarea placeholder="10자 이상 입력해주세요." />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyIntro;
