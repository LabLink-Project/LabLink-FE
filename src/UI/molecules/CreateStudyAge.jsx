import React, { useEffect, useState } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';
import {
  StOptionalSelectionLabel,
  StOptionalSelectionWrap,
} from '../styles/OptionalSelection.styled';
import { StCheckbox } from '../styles/common.styled';
import { StAgeInput } from '../styles/StudyInput.styled';

function CreateStudyAge() {
  const [minAge, setMinAge] = useState('0');
  const [maxAge, setMaxAge] = useState('100');

  const handler = useSetCreateStudyState();

  useEffect(() => {
    validation(minAge);
    handler('subjectMinAge', minAge);
  }, [minAge]);

  useEffect(() => {
    validation(maxAge);
    handler('subjectMaxAge', maxAge);
  }, [maxAge]);

  const [isAnyAge, setIsAnyAge] = useState(true);

  const validation = age => {
    if (parseInt(age) < 0) {
      alert('나이가 너무 작습니다 🥺');
      setMinAge('');
      setMaxAge('');
    }
    if (parseInt(age) > 100) {
      alert('나이가 너무 큽니다 🥺');
      setMinAge('');
      setMaxAge('');
    }
  };

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">연령</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <div>
        <StAgeInput
          type="text"
          value={minAge || ''}
          onChange={e => {
            setMinAge(e.target.value);
          }}
          placeholder="최소 연령"
          disabled={isAnyAge ? true : false}
          required
        />
        <span>세 ~ </span>
        <StAgeInput
          type="text"
          value={maxAge || ''}
          onChange={e => {
            setMaxAge(e.target.value);
          }}
          placeholder="최대 연령"
          disabled={isAnyAge ? true : false}
          required
        />
        <span>세</span>
      </div>
      <StOptionalSelectionWrap>
        <StCheckbox
          type="checkbox"
          id="성별무관"
          onChange={() => {
            if (!isAnyAge) {
              setMinAge('0');
              setMaxAge('100');
            }
            if (isAnyAge) {
              setMinAge('');
              setMaxAge('');
            }
            setIsAnyAge(!isAnyAge);
          }}
          checked={isAnyAge ? true : false}
        />
        <StOptionalSelectionLabel htmlFor="연령무관">
          연령무관
        </StOptionalSelectionLabel>
      </StOptionalSelectionWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyAge;
