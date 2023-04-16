import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StStudyOnline } from './Study.styled';
import { StFlexBox } from './common.styled';

export const StReadStudyWrap = styled.div`
  padding: 20px;
`;

export const StReadStudyDetailImage = styled.img`
  min-width: 335px;
  min-height: 216px;

  background-color: ${StudyColors.searchBar};
`;

export const StReadStudyDetailOnline = styled(StStudyOnline)`
  margin: 0;
`;

export const StReadStudyDetailHeader = styled(StFlexBox)`
  margin: 16px 0 10px;
`;

export const StReadStudyDetailDueDate = styled.span`
  margin-right: 6px;
`;

export const StReadStudyDetailWrap = styled.div`
  margin-bottom: 10px;
`;

export const StReadStudyDetailCompany = styled.h2`
  ${StudyFontOptions.body}
  font-weight: 600;
  margin-bottom: 4px;
`;

export const StReadStudyDetailTitle = styled.h1`
  ${StudyFontOptions.subtitle}
  font-weight: 400;
`;

export const StReadStudyDetailDateAndPayWrap = styled(StFlexBox)`
  border-bottom: 1px solid ${StudyColors.studyDetailBorder};
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

export const StReadStudyDetailDate = styled.div`
  ${StudyFontOptions.body};
  font-weight: 600;
`;

export const StReadStudyDetailDateSpan = styled.span`
  ${StudyFontOptions.caption}
  color: ${StudyColors.studyParagraph};
  vertical-align: middle;
`;

export const StReadStudyDetailPay = styled.div`
  ${StudyFontOptions.subtitle}
`;

export const StReadStudyDetailRequireWrap = styled.div`
  min-width: 335px;

  padding: 16px;
  margin-bottom: 8px;

  box-sizing: border-box;

  background-color: ${StudyColors.bannerBg};
`;

export const StReadStudyDetailRequireTitle = styled.h3`
  ${StudyFontOptions.subtitle}
  margin-bottom: 16px;
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

  box-sizing: border-box;

  background-color: ${StudyColors.bannerBg};
`;

export const StReadStudyDetailInfoTitle = styled.h3`
  ${StudyFontOptions.subtitle}
  margin-bottom: 16px;
`;

export const StReadStudyDetailInfoParagraph = styled.p`
  ${StudyFontOptions.body};
  color: ${StudyColors.paragraph};
  vertical-align: baseline;
  white-space: pre-line;
`;

export const StReadStudyDetailQuestion = styled.button`
  min-width: 109px;
  min-height: 56px;
  padding: 16px 12px;
  border: 1px solid ${StudyColors.studyButtonBorder};
  ${StudyFontOptions.subtitle}
  margin-right: 4px;
`;

export const StReadStudyDetailApplication = styled.button`
  min-width: 222px;
  min-height: 56px;
  padding: 16px auto;
  color: ${StudyColors.white};
  background-color: ${StudyColors.black};
  ${StudyFontOptions.subtitle};
  margin-right: 4px;
`;
