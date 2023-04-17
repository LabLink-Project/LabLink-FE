import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { StudyColors, StudyFontOptions } from 'src/shared/Colors';

export const StPersonalRequestPaddingWrap = styled.div`
  padding: 20px;
`;

export const StPersonalRequestWrap = styled(StFlexBox)`
  margin: 24px 0 16px;
`;

export const StPersonalRequestTitle = styled.h2`
  ${StudyFontOptions.title}
`;

export const StPersonalRequestDiv = styled.div`
  ${StudyFontOptions.body}
`;

export const StPersonalRequestListWrap = styled.div`
  padding: 16px 12px;
  border: 1px solid ${StudyColors.studyBorder};
`;

export const StPersonalRequestHeaderWrap = styled(StFlexBox)`
  margin-bottom: 14px;
`;

export const StPersonalRequestCompany = styled.div`
  ${StudyFontOptions.body};
  font-weight: 600;
`;

export const StPersonalRequestTime = styled.div`
  ${StudyFontOptions.caption};
  color: ${StudyColors.paragraph};
`;

export const StPersonalRequestStudyTitle = styled.div`
  ${StudyFontOptions.subtitle}
  font-weight: 400;
  margin-bottom: 4px;
`;

export const StPersonalRequestStudyPay = styled.div`
  ${StudyFontOptions.caption};
  color: ${StudyColors.paragraph};
  margin-top: 8px;
`;

export const StPersonalRequestStudyPayStrong = styled.strong`
  ${StudyFontOptions.subtitle};
  color: ${StudyColors.studyPay};
`;
