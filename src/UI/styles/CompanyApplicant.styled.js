import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StCompanyApplicantWrap = styled.div`
  padding: 20px;
`;

export const StCompanyApplicantDiv = styled.div`
  ${StudyFontOptions.caption}
`;

export const StCompanyApplicantCheckboxWrap = styled.div`
  margin-top: 24px;
`;

export const StCompanyApplicantFlexWrap = styled(StFlexBox)`
  align-items: start;
  margin-bottom: 12px;
`;

export const StCompanyApplicantCount = styled(StCompanyApplicantDiv)`
  font-weight: 600;
  color: ${StudyColors.buttonFocus};
`;

export const StCompanyApplicantSpan = styled.span`
  ${StudyFontOptions.caption}
`;

export const StCompanyApplicantStudyWrap = styled.div`
  padding: 16px 12px;
  background-color: ${StudyColors.bannerBg};
  margin: 16px 0;
`;

export const StCompanyApplicantStudyTitle = styled.h2`
  ${StudyFontOptions.subtitle}
  font-weight: 400;
`;

export const StCompanyApplicantPay = styled.div`
  ${StudyFontOptions.caption};
  color: ${StudyColors.paragraph};
`;

export const StCompanyApplicationPayStrong = styled.strong`
  ${StudyFontOptions.subtitle};
  color: ${StudyColors.black};
`;

export const StCompanyApplicantList = styled.div`
  min-width: 335px;
  min-height: 122px;

  border: 1px solid ${StudyColors.inputBorder};
  border-radius: 12px;
  padding: 16px 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const StCompanyApplicantListWrap = styled.div`
  margin-bottom: 12px;
`;

export const StCompanyApplicantListName = styled.span`
  ${StudyFontOptions.subtitle};
  margin-right: 8px;
`;

export const StCompanyApplicantListGender = styled.span`
  ${StudyFontOptions.caption};
  color: ${StudyColors.paragraph};
  vertical-align: text-top;
`;

export const StCompanyApplicantListPhoneNumber = styled.div`
  ${StudyFontOptions.body};
  margin-bottom: 8px;
`;
export const StCompanyApplicantListAddress = styled.div`
  ${StudyFontOptions.body};
`;

export const StCompanyApplicantListMessage = styled.div``;

export const StCompanyApplicantListMessageTitle = styled.p`
  font-weight: 600;
`;

export const StCompanyApplicantListMessageBody = styled.p`
  font-size: 13px;
`;

export const StCompanyApplicantListButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;
