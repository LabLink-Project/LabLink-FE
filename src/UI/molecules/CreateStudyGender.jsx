import React, { useEffect, useState } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';
import { StButton } from '../styles/Button.styled';
import {
  StOptionalSelectionLabel,
  StOptionalSelectionWrap,
} from '../styles/OptionalSelection.styled';
import { StCheckbox } from '../styles/common.styled';

function CreateStudyGender() {
  const [gender, setGender] = useState('ALL');
  const reduxHandler = useSetCreateStudyState();

  useEffect(() => {
    reduxHandler('subjectGender', gender);
  }, [gender]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">성별</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <div>
        <StButton
          onClick={e => {
            e.preventDefault();
            setGender('MALE');
          }}
          current={gender === 'MALE' ? true : false}
        >
          남자
        </StButton>
        <StButton
          onClick={e => {
            e.preventDefault();
            setGender('FEMALE');
          }}
          current={gender === 'FEMALE' ? true : false}
        >
          여자
        </StButton>
      </div>
      <StOptionalSelectionWrap>
        <StCheckbox
          type="checkbox"
          id="성별무관"
          onChange={() => setGender('ALL')}
          checked={gender === 'ALL' ? true : false}
        />
        <StOptionalSelectionLabel htmlFor="성별무관">
          성별무관
        </StOptionalSelectionLabel>
      </StOptionalSelectionWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyGender;
