import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { fontOptions } from 'src/shared/designFontOptions';

export const StSearchHeaderNotification = styled.div`
  margin: 14px 0;
`;

export const StSearchHeaderTitle = styled.h1`
  ${fontOptions.body1};
  font-weight: 600;
`;

export const StSearchHeaderBackButton = styled.div`
  margin-right: 8px;
`;

export const StSearchHeaderBackImage = styled.img`
  width: 28px;
  height: 26px;
  cursor: pointer;
`;

export const StSearchHeaderWrap = styled(StFlexBox)`
  margin: 20px 20px 0;
  max-height: 48px;
`;
