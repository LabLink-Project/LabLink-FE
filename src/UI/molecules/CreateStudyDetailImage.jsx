import React, { useEffect, useState } from 'react';
import {
  StCreateStudyFileInput,
  StCreateStudyFileUploadLabel,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import { StFlexBox } from '../styles/common.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

function CreateStudyDetailImage() {
  const [detailFile, setDetailFile] = useState(null);
  const handler = useSetCreateStudyState();

  useEffect(() => {
    if (detailFile) handler('detailImage', detailFile);
  }, [detailFile]);

  return (
    <StCreateStudyWrap>
      <StFlexBox sort="space-between">
        <StCreateStudyLabelWrap>
          <StCreateStudyLabel htmlFor="">이미지 첨부</StCreateStudyLabel>
        </StCreateStudyLabelWrap>
        <StCreateStudyFileUploadLabel htmlFor="upload2">
          파일 선택
        </StCreateStudyFileUploadLabel>
        <StCreateStudyFileInput
          type="file"
          id="upload2"
          name="detailImage"
          onChange={e => setDetailFile(e.target.files[0])}
        />
      </StFlexBox>
      <div>{detailFile?.name}</div>
    </StCreateStudyWrap>
  );
}

export default CreateStudyDetailImage;
