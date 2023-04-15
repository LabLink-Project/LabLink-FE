import { Link } from 'react-router-dom';
import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled, { css } from 'styled-components';
import { StFlexBox } from './common.styled';

export const StHomeHeaderWrap = styled(StFlexBox)`
  padding: 14px 24px;
`;

export const StHomeHeaderIcon = styled.span`
  padding: 4px 0;
  border: 1px solid ${StudyColors.buttonBorder};
  ${StudyFontOptions.body}

  ${props =>
    props.children === '검색' &&
    css`
      margin-right: 16px;
    `}
`;

export const StHomeHeaderLink = styled(Link)`
  font-weight: 600;
  color: inherit;
  text-decoration: none;
`;
