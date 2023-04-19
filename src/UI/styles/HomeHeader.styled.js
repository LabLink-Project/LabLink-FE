import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { StFlexBox } from './common.styled';

export const StHomeHeaderWrap = styled(StFlexBox)`
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
  font-weight: 600;
  color: inherit;
  text-decoration: none;
`;
