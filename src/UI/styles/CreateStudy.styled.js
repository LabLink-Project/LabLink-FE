import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import StudyInput from '../atomics/StudyInput';
import { fontOptions } from 'src/shared/designFontOptions';

export const StRequiredInputSpan = styled.span`
  ${StudyFontOptions.subtitle}
  font-size: 12px;
`;

export const StCreateStudyLabel = styled.label`
  ${StudyFontOptions.subtitle}
  font-weight: 400;
  margin-right: 4px;
`;

export const StCreateStudyWrap = styled.div`
  margin: 32px 0;
`;

export const StCreateStudyLabelWrap = styled.div`
  margin-bottom: 16px;
`;

export const StCreateStudyAddressInput = styled.input`
  min-width: 254px;

  padding: 14px 12px;
  border: 1px solid ${StudyColors.inputBorder};
  margin: 0 8px 8px 0;

  box-sizing: border-box;

  ${StudyFontOptions.body}
`;

export const StCreateStudyDueDateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 335px;
  border: 1px solid ${StudyColors.inputBorder};
  padding: 16px 12px;
  box-sizing: border-box;
`;

export const StCreateStudyPayInput = styled(StudyInput)``;

export const StCreateStudyTextarea = styled.textarea`
  min-width: 335px;
  min-height: 176px;

  padding: 12px;
  border: 1px solid ${StudyColors.inputBorder};
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;

  &::placeholder {
    font-family: Pretendard, sans-serif;
    ${fontOptions.caption};
  }

  &:focus {
    outline: none;
  }
`;

export const StCreateStudyParagraph = styled.p`
  ${StudyFontOptions.caption}
  line-height: 18px;
  color: ${StudyColors.paragraph};
`;

export const StCreateStudyFileInput = styled.input`
  display: none;
`;

export const StCreateStudyFileUploadLabel = styled.label`
  background-color: ${StudyColors.buttonBg};
  color: ${StudyColors.white};
  padding: 10px 8px;
  ${StudyFontOptions.body}
`;

export const StCreateStudySubmit = styled.input`
  min-width: 335px;
  min-height: 56px;

  padding: 16px 10px;
  color: ${StudyColors.white};
  background-color: ${StudyColors.title};

  ${StudyFontOptions.subtitle}
  line-height: 24px;
`;
