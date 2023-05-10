import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StStudyOnline } from './Study.styled';
import { StFlexBox } from './common.styled';
import { fontColors, serviceColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';

export const StReadStudyWrap = styled.div`
  padding: 20px;
`;

export const StReadStudyDetailImage = styled.img`
  min-width: 375px;
  max-width: 375px;
  min-height: 200px;
  max-height: 500px;

  background-color: ${StudyColors.searchBar};
  object-fit: contain;
`;

export const StReadStudyDetailHeader = styled(StFlexBox)`
  margin: 16px 0 10px;
`;

export const StReadStudyDetailWrap = styled.div`
  margin-bottom: 10px;
`;

export const StReadStudyDetailDateAndPayWrap = styled(StFlexBox)`
  margin-bottom: 24px;
`;

export const StReadStudyDetailDate = styled.div`
  ${StudyFontOptions.body};
  font-weight: 600;
`;

export const StReadStudyDetailRequireWrap = styled.div`
  min-width: 335px;

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 12px;

  background-color: ${fontColors.white};
`;

export const StReadStudyDetailRequireTitle = styled.h3`
  ${fontOptions.subtitle}
  margin-bottom: 0;
`;

export const StReadStudyDetailTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0 8px 0;
`;

export const StReadStudyDetailTr = styled.tr``;

export const StReadStudyDetailRequireOptionTitle = styled.td`
  min-width: 60px;
  ${StudyFontOptions.caption};
  color: ${StudyColors.studyRequire};
  vertical-align: baseline;
`;

export const StReadStudyDetailRequireOptions = styled.td`
  ${StudyFontOptions.body};
  color: ${StudyColors.paragraph};
  vertical-align: baseline;
`;

export const StReadStudyDetailInfoWrap = styled.div`
  min-width: 335px;

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 12px;

  background-color: ${fontColors.white};
`;

export const StReadStudyDetailInfoTitle = styled.h3`
  ${fontOptions.subtitle};
  margin-bottom: 0;
`;

export const StReadStudyDetailInfoParagraph = styled.p`
  ${StudyFontOptions.body};
  color: ${StudyColors.paragraph};
  vertical-align: baseline;
  white-space: pre-line;
`;

export const StParagraph = styled(StReadStudyDetailInfoParagraph)`
  margin-bottom: 8px;
`;

export const StReadStudyDetailQuestion = styled.button`
  min-width: 76px;
  min-height: 56px;
  padding: 18px 13.5px;
  border: 1px solid ${fontColors.caption};
  border-radius: 8px;
  ${fontOptions.body1};
  margin-right: 4px;
  /* box-sizing: border-box; */
`;

export const StReadStudyDetailApplication = styled.button`
  min-width: 253px;
  min-height: 58px;

  padding: 16px auto;
  border-radius: 8px;

  color: ${fontColors.title};
  background-color: ${serviceColors.primary};
  ${fontOptions.subtitle};
`;
