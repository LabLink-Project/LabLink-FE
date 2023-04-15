import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';

function CreateStudyTitle() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">공고명</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StudyInput
        type="text"
        placeholder="공고명을 입력해 주세요."
      />
    </StCreateStudyWrap>
  );
}

export default CreateStudyTitle;
