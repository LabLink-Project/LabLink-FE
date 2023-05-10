import React, { useEffect, useState } from 'react';
import {
  StCreateStudyFileInput,
  StCreateStudyFileUploadLabel,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyParagraph,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import { StFlexBox } from '../styles/common.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

function CreateStudyImage() {
  const [file, setFile] = useState(null);
  const handler = useSetCreateStudyState();

  useEffect(() => {
    if (file) handler('thumbnailImage', file);
  }, [file]);

  return (
    <StCreateStudyWrap>
      <StFlexBox sort="space-between">
        <StCreateStudyLabelWrap>
          <StCreateStudyLabel htmlFor="">썸네일 이미지 첨부</StCreateStudyLabel>
          <StCreateStudyParagraph>
            공고 상단 이미지는 1개의 이미지만 등록 가능합니다.
          </StCreateStudyParagraph>
        </StCreateStudyLabelWrap>
        <StCreateStudyFileUploadLabel htmlFor="upload">
          파일 선택
        </StCreateStudyFileUploadLabel>
        <StCreateStudyFileInput
          type="file"
          id="upload"
          name="thumbnailImage"
          onChange={e => setFile(e.target.files[0])}
        />
      </StFlexBox>
      <div>{file?.name}</div>
    </StCreateStudyWrap>
  );
}

export default CreateStudyImage;
