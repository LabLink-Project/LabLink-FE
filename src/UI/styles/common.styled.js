import { StudyColors } from 'src/shared/Colors';
import styled, { css } from 'styled-components';

export const StFlexBox = styled.div`
  display: flex;
  align-items: center;

  ${props =>
    props.sort === 'center' &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.sort === 'space-between' &&
    css`
      justify-content: space-between;
    `}

    ${props =>
    props.color &&
    css`
      color: ${StudyColors[props.color]};
    `}
`;
