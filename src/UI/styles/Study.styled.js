import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import { fontColors } from 'src/shared/designColors';
import styled from 'styled-components';

export const StStudy = styled.li`
  max-width: 335px;
  max-height: 156px;

  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 8px;

  background-color: ${fontColors.white};
`;

export const StStudyWrap = styled.div`
  margin-bottom: 12px;
`;

export const StStudyOnline = styled.div`
  background-color: ${StudyColors.body};
  color: ${StudyColors.white};
  padding: 2px 8px;
  margin-bottom: 8px;

  ${StudyFontOptions.caption}
`;

export const StStudyCompany = styled.h2`
  ${StudyFontOptions.body}
  font-weight: 600;
`;

export const StStudyTitle = styled.p`
  ${StudyFontOptions.body}
  margin-bottom: 12px;
`;

export const StStudyPrice = styled.strong`
  color: ${StudyColors.black};
  ${StudyFontOptions.title}
`;

export const StStudyCurrency = styled.div`
  ${StudyFontOptions.caption}
`;

export const StStudyDateAndAddress = styled.div`
  ${StudyFontOptions.caption}
  color: ${StudyColors.body}
`;
