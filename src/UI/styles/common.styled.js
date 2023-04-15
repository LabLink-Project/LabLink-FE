import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
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

export const StCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-color: ${StudyColors.buttonBorder};
  margin-right: 5px;
`;

export const StContentWrap = styled.div`
  padding: 20px;
`;
