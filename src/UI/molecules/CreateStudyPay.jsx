import React, { useEffect } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyPayInput,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';
import { useInput } from 'src/hooks/useInput';

function CreateStudyPay() {
  const [pay, payHandler] = useInput();
  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('pay', pay);
  }, [pay]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">실험수당</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyPayInput
        type="number"
        value={pay}
        onChange={payHandler}
      />
    </StCreateStudyWrap>
  );
}

export default CreateStudyPay;
