import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StCompanyPageWrap = styled.div`
  padding: 20px;
`;

export const StCompanyPageUserWrap = styled(StFlexBox)`
  margin: 16px 0 24px;
`;

export const StCompanyPageH2 = styled.h2`
  ${StudyFontOptions.title}
  font-weight: 400;
`;

export const StCompanyPageStrong = styled.strong`
  ${StudyFontOptions.title}
`;

export const StCompanyPageTemp = styled.div`
  min-width: 335px;
  min-height: 100px;
  background-color: ${StudyColors.searchBar};
  margin-bottom: 32px;
`;

export const StCompanyPageList = styled.li`
  padding: 16px 0;
  ${StudyFontOptions.body}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StCompanyPageCollapse = styled.div`
  margin-left: 10px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  font-size: small;
`;
