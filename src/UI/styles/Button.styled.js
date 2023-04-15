import { StudyColors } from 'src/shared/Colors';
import styled, { css } from 'styled-components';

export const StButton = styled.button`
  min-width: 164px;
  min-height: 40px;

  border: 1px solid ${StudyColors.buttonBorder};
  padding: 10px;

  &:focus {
    background-color: ${StudyColors.buttonFocus};
    color: ${StudyColors.white};
  }

  ${props =>
    props.children === '온라인' &&
    css`
      margin-right: 7px;
    `}

  ${props =>
    props.children === '남자' &&
    css`
      margin-right: 7px;
    `}
`;

export const StBlackButton = styled.button`
  min-width: 73px;
  min-height: 48px;
  padding: 14px 12px;
  background-color: ${StudyColors.black};
  color: ${StudyColors.white};
`;
