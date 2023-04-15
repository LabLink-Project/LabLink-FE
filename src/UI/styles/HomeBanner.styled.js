import { StudyColors } from 'src/shared/Colors';
import styled from 'styled-components';

export const StHomeBannerImg = styled.img`
  background-color: ${StudyColors.bannerBg};
  min-width: 335px;
  min-height: 168px;
`;

export const StHomeBannerCircle = styled.div`
  min-width: 8px;
  min-height: 8px;
  background-color: ${StudyColors.searchBar};
  border-radius: 4px;
  margin: 16px 8px 0 0;
`;
