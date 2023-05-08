import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StSearchBarWrap = styled.div`
  background-color: ${fontColors.background};
  padding: 10px 8px;
  border-radius: 90px;
`;

export const StSearchBarIconLabel = styled.label`
  margin-right: 8px;
  height: 16px;
`;

export const StSearchBarIcon = styled.img`
  vertical-align: middle;
`;

export const StSearchBar = styled.input`
  ${fontOptions.body1};
  color: ${fontColors.caption};
`;
