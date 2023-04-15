import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyTextarea,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';

function CreateStudyDetail() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">상세설명</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        <StCreateStudyTextarea placeholder="10자 이상 입력해주세요." />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyDetail;
