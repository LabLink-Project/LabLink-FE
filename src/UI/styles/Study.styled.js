import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StStudy = styled.li`
  max-width: 335px;
  font-size: 12px;
  background-color: ${StudyColors.bg};

  margin-bottom: 10px;
  padding: 12px;
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
