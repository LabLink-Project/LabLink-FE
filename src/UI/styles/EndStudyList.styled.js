import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StEndStudyListButton = styled.button`
  min-width: 83.75px;
  min-height: 40px;

  padding: 10px auto;
  border: 1px solid ${StudyColors.studyBorder};
  box-sizing: border-box;

  ${StudyFontOptions.body};
`;

export const StEndStudyListWrap = styled.div`
  padding: 20px;
`;

export const StEndStudyListButtonWrap = styled.div`
  margin: 32px 0 16px;
`;

export const StEndStudyListDateWrap = styled(StFlexBox)`
  gap: 8px;
  margin-bottom: 32px;
`;

export const StEndStudyListDate = styled.input`
  min-width: 126px;
  min-height: 40px;

  padding: 12px;
  border: 1px solid ${StudyColors.inputBorder};

  ${StudyFontOptions.caption};
  color: ${StudyColors.date};
`;

export const StEndStudyListQueryButton = styled.input`
  min-width: 68px;
  min-height: 40px;

  ${StudyFontOptions.body};
  color: ${StudyColors.white};
  font-weight: 700;

  background-color: ${StudyColors.date};
  color: ${StudyColors.white};
`;

export const StEndStudyListDivWrap = styled.div`
  min-width: 335px;
  min-height: 144px;

  padding: 16px 12px;
  border: 1px solid ${StudyColors.studyBorder};
`;

export const StEndStudyListFlexWrap = styled(StFlexBox)`
  align-items: end;
`;

export const StEndStudyListOnline = styled.div`
  min-width: 52px;
  min-height: 20px;

  padding: 2px 10px;

  ${StudyFontOptions.caption}
  background-color: ${StudyColors.dateOnline};
  color: ${StudyColors.white};
`;

export const StEndStudyListCount = styled.div`
  ${StudyFontOptions.caption};
  font-weight: 600;
`;

export const StEndStudyListOnlineFlexWrap = styled(StFlexBox)`
  margin-bottom: 8px;
`;

export const StEndStudyListTitle = styled.h2`
  margin-bottom: 22px;

  ${StudyFontOptions.subtitle};
  font-weight: 400;
`;

export const StEndStudyListPay = styled.div`
  ${StudyFontOptions.caption};
  color: ${StudyColors.paragraph};
`;

export const StEndStudyListPayStrong = styled.strong`
  ${StudyFontOptions.subtitle}
  color: ${StudyColors.black};
`;

export const StEndStudyListFeedbackButton = styled.button`
  padding: 4px 12px;

  ${StudyFontOptions.body};
  background-color: ${StudyColors.black};
  color: ${StudyColors.white};
`;
