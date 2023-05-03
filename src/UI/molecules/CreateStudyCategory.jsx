import React, { useEffect, useState } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';
import { StButton } from '../styles/Button.styled';

function CreateStudyCategory() {
  const [category, setCategory] = useState('ONLINE');
  const reduxHandler = useSetCreateStudyState();

  useEffect(() => {
    reduxHandler('category', category);
  }, [category]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">유형</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StButton
        current={category === 'ONLINE' ? true : false}
        onClick={event => {
          event.preventDefault();
          setCategory('ONLINE');
        }}
      >
        온라인
      </StButton>
      <StButton
        current={category === 'OFFLINE' ? true : false}
        onClick={event => {
          event.preventDefault();
          setCategory('OFFLINE');
        }}
      >
        오프라인
      </StButton>
    </StCreateStudyWrap>
  );
}

export default CreateStudyCategory;
