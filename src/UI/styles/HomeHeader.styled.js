import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { StFlexBox } from './common.styled';
import { fontOptions } from 'src/shared/designFontOptions';

export const StHomeHeaderWrap = styled(StFlexBox)`
  margin: 20px 20px 0;
  padding: 14px 0;
`;

export const StHomeHeaderIcon = styled.img`
  max-width: 25px;
  max-height: 20px;

  ${props =>
    props.alt === '검색 버튼' &&
    css`
      margin-right: 16px;
    `}
`;

export const StHomeHeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
