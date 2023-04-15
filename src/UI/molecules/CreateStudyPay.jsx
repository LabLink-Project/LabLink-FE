import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyPayInput,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';

function CreateStudyPay() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">실험수당</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyPayInput
        type="text"
        // value={study.pay}
        // onChange={e => setStudy({ ...study, title: e.target.value })}
      />
    </StCreateStudyWrap>
  );
}

export default CreateStudyPay;
