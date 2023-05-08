import React from 'react';
import {
  StReadStudyDetailInfoParagraph,
  StReadStudyDetailInfoWrap,
} from 'src/UI/styles/ReadStudyDetail.styled';
import { StFlexBox } from 'src/UI/styles/common.styled';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';
import documentIcon from 'src/assets/design/StudyDetail/Document.svg';

function Detail({ description }) {
  return (
    <StReadStudyDetailInfoWrap>
      <StMarginWrap>
        <StImg
          src={documentIcon}
          alt="상세 설명 아이콘"
        />
        <StH3>상세 설명</StH3>
      </StMarginWrap>

      <StReadStudyDetailInfoParagraph>
        {description}
      </StReadStudyDetailInfoParagraph>
    </StReadStudyDetailInfoWrap>
  );
}

export default Detail;

const StH3 = styled.h3`
  ${fontOptions.subtitle};
  margin-bottom: 0px;
`;

const StImg = styled.img`
  margin-right: 4px;
`;

const StMarginWrap = styled(StFlexBox)`
  margin-bottom: 16px;
`;
