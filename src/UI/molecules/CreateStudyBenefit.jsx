import React, { useEffect } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';
import { useInput } from 'src/hooks/useInput';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

function CreateStudyBenefit() {
  const [benefit, benefitHandler] = useInput(null);
  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('benefit', benefit);
  }, [benefit]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">우대사항</StCreateStudyLabel>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        <StudyInput
          type="text"
          value={benefit || ''}
          onChange={benefitHandler}
        />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyBenefit;
