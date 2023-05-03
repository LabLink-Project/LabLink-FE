import { StudyColors } from 'src/shared/Colors';
import styled from 'styled-components';

export const StFooterNavList = styled.li`
  min-width: 93.75px;
  min-height: 56px;
  padding: 17px auto;

  background-color: ${StudyColors.footer};

  display: flex;
  align-items: center;
  justify-content: center;

  /* color: ; */
`;

export const StFooterNavUl = styled.ul`
  min-width: 375px;
  max-width: 375px;

  display: flex;
  justify-content: center;

  position: fixed;
  margin-left: -20px;
  bottom: 0;
`;
