import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StTopButton = styled.button`
  min-width: 187px;
  min-height: 40px;

  padding: 10px auto;
  ${StudyFontOptions.body}
  font-weight: 600;

  color: ${StudyColors.paragraph};

  &:focus {
    border-bottom: 1px solid ${StudyColors.black};
    color: ${StudyColors.black};
  }
`;
