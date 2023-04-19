import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StHomeCategoryNav = styled.nav``;

export const StHomeCategoryNavList = styled.li``;

export const StHomeCategoryNavButton = styled.button`
  max-height: 40px;
  padding: 10px;
  box-sizing: border-box;
  color: ${StudyColors.paragraph};
  ${StudyFontOptions.body}

  &:focus {
    color: ${StudyColors.black};
    border-bottom: 2px solid ${StudyColors.black};
  }
`;
