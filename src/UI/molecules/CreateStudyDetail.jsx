import React, { useEffect } from 'react';
import {
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyTextarea,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import { useInput } from 'src/hooks/useInput';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

function CreateStudyDetail() {
  const [description, descriptionHandler] = useInput();
  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('description', description);
  }, [description]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">상세설명</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        <StCreateStudyTextarea
          placeholder="10자 이상 입력해주세요."
          value={description}
          onChange={descriptionHandler}
        />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyDetail;
