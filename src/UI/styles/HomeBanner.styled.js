import { StudyColors } from 'src/shared/Colors';
import { fontColors } from 'src/shared/designColors';
import styled, { css } from 'styled-components';

export const StHomeBannerImg = styled.img`
  background-color: ${StudyColors.bannerBg};
  min-width: 335px;
  max-width: 335px;
  min-height: 168px;
  max-height: 168px;
`;

export const StHomeBannerCircle = styled.div`
  min-width: 6px;
  min-height: 4px;
  background-color: ${StudyColors.searchBar};
  border-radius: 4px;
  margin: 16px 4px 0 0;
  cursor: pointer;

  ${props =>
    props.current &&
    css`
      min-width: 12px;
      background: gray;
      color: ${fontColors.title};
    `}
`;
