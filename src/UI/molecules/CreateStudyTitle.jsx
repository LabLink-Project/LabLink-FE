import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';

function CreateStudyTitle({ state }) {
  console.log(state);
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">공고명</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StudyInput
        type="text"
        placeholder="공고명을 입력해 주세요."
        value={state[0]}
        onChange={e => {
          console.log(state[0]);
          state[1](e.target.value);
        }}
      />
    </StCreateStudyWrap>
  );
}

export default CreateStudyTitle;
