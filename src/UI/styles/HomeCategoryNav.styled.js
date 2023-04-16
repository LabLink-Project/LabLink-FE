import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StHomeCategoryNav = styled.nav`
  padding: 0 24px;
`;

export const StHomeCategoryNavList = styled.li``;

export const StHomeCategoryNavButton = styled.button`
  padding: 10px;
  color: ${StudyColors.paragraph};
  ${StudyFontOptions.body}

  &:focus {
    color: ${StudyColors.black};
    border-bottom: 2px solid ${StudyColors.black};
  }
`;
