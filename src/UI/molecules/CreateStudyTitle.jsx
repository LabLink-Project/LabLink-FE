import React, { useEffect } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';
import { useInput } from 'src/hooks/useInput';

function CreateStudyTitle() {
  const [title, titleHandler] = useInput();
  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('title', title);
  }, [title]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">공고명</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StudyInput
        type="text"
        placeholder="공고명을 입력해 주세요."
        value={title}
        onChange={titleHandler}
      />
    </StCreateStudyWrap>
  );
}

export default CreateStudyTitle;
