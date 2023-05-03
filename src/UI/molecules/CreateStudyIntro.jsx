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

function CreateStudyIntro() {
  const [intro, introHandler] = useInput();
  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('studyInfo', intro);
  }, [intro]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">연구소개</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>

      <StCreateStudyWrap>
        <StCreateStudyTextarea
          placeholder="10자 이상 입력해주세요."
          value={intro}
          onChange={introHandler}
        />
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyIntro;
