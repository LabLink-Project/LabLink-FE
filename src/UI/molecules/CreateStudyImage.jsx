import React from 'react';
import {
  StCreateStudyFileInput,
  StCreateStudyFileUploadLabel,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyParagraph,
  StCreateStudyWrap,
} from '../styles/CreateStudy.styled';
import { StFlexBox } from '../styles/common.styled';

function CreateStudyImage() {
  return (
    <StCreateStudyWrap>
      <StFlexBox sort="space-between">
        <StCreateStudyLabelWrap>
          <StCreateStudyLabel htmlFor="">이미지 첨부</StCreateStudyLabel>
          <StCreateStudyParagraph>
            500kB 이하의 jpg, png, pdf 파일만 등록 가능합니다.
          </StCreateStudyParagraph>
        </StCreateStudyLabelWrap>
        <StCreateStudyFileUploadLabel htmlFor="upload">
          파일 선택
        </StCreateStudyFileUploadLabel>
        <StCreateStudyFileInput
          type="file"
          name=""
          id="upload"
        />
      </StFlexBox>
      {/* <ul>
        <li>Document.jpg</li>
        <li>image.pdf</li>
      </ul> */}
    </StCreateStudyWrap>
  );
}

export default CreateStudyImage;
