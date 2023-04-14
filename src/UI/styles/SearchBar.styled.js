import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StSearchBarWrap = styled.div`
  background-color: ${StudyColors.searchBar};
  padding: 14px 8px;
`;

export const StSearchBarIconLabel = styled.label`
  margin-right: 8px;
  height: 16px;
`;

export const StSearchBarIcon = styled.img`
  vertical-align: middle;
`;

export const StSearchBar = styled.input`
  ${StudyFontOptions.body}
`;
