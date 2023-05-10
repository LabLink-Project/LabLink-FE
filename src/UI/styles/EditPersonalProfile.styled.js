import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StEditPersonalProfileWrap = styled.div`
  padding: 20px;
`;

export const StEditPersonalProfileH2 = styled.h2`
  ${StudyFontOptions.subtitle}
  margin-bottom: 14px;
`;

export const StEditPersonalProfilePwWrap = styled.div`
  margin-top: 32px;
`;

export const StEditPersonalProfileInput = styled.input`
  min-width: 335px;

  padding: 14px 8px;
  border: 1px solid ${StudyColors.inputBorder};
  margin-bottom: 4px;

  &::placeholder {
    ${StudyFontOptions.body}
  }
`;

export const StEditPersonalProfileValidationMessage = styled.div`
  ${StudyFontOptions.caption};
  color: ${StudyColors.black};
`;

export const StEditPersonalProfileTitle = styled.h2`
  ${StudyFontOptions.subtitle};
  margin-bottom: 16px;
`;

export const StEditPersonalProfileDateWrap = styled(StFlexBox)`
  gap: 4px;
  margin-bottom: 24px;
`;

export const StEditPersonalProfileYear = styled.input`
  min-width: 335px;
  min-height: 40px;

  padding: 10px 8px;
  border: 1px solid ${StudyColors.inputBorder};

  ${StudyFontOptions.caption};
  color: ${StudyColors.inputPlaceholder};
`;

export const StEditPersonalProfileCheckPw = styled(StEditPersonalProfileInput)`
  margin-bottom: 4px;
`;

export const StEditPersonalProfileCheckDiv = styled.div`
  margin-bottom: 8px;
  ${StudyFontOptions.caption}
`;

export const StEditPersonalProfileButton = styled.input`
  min-width: 167px;
  min-height: 40px;

  padding: 10px;
  border: 1px solid ${StudyColors.inputBorder};

  ${StudyFontOptions.body};
  color: ${StudyColors.inputPlaceholder};

  &:focus {
    border: 1px solid ${StudyColors.black};
    color: ${StudyColors.black};
  }
`;

export const StEditPersonalProfileChangeInfoInput = styled(
  StEditPersonalProfileInput
)`
  margin-bottom: 24px;
`;
