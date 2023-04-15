import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';

function CreateStudyBenefit() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">우대사항</StCreateStudyLabel>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        <StudyInput
          type="text"
          //   value={study.age}
          //   onChange={e => setStudy({ ...study, gender: e.target.value })}
        />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyBenefit;
