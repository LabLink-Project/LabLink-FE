import React from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import OptionalSelection from '../atomics/OptionalSelection';
import Button from '../atomics/Button';

function CreateStudyGender() {
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">성별</StCreateStudyLabel>
      </StCreateStudyLabelWrap>
      <div>
        <Button

        //   onChange={e => setStudy({ ...study, gender: e.target.value })}
        >
          남자
        </Button>
        <Button
        //   onChange={e => setStudy({ ...study, gender: e.target.value })}
        >
          여자
        </Button>
      </div>
      <OptionalSelection label="성별무관" />
    </StCreateStudyWrap>
  );
}

export default CreateStudyGender;
