import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';
import OptionalSelection from '../atomics/OptionalSelection';

function CreateStudyAge() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">연령</StCreateStudyLabel>
      </StCreateStudyLabelWrap>
      <div>
        <StudyInput
          type="text"
          //   value={study.age}
          //   onChange={e => setStudy({ ...study, gender: e.target.value })}
        />
      </div>
      <OptionalSelection label="연령무관" />
    </StCreateStudyWrap>
  );
}

export default CreateStudyAge;
