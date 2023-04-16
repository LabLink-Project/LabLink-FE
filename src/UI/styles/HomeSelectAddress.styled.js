import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { StudyColors, StudyFontOptions } from 'src/shared/Colors';

export const StHomeSelectAddressWrap = styled(StFlexBox)`
  padding: 14px 16px;
  background-color: ${StudyColors.bannerBg};
  margin-top: 24px;
`;

export const StHomeSelectAddress = styled.div`
  ${StudyFontOptions.body}
`;

export const StHomeSelectAddressButton = styled.div`
  ${StudyFontOptions.caption}
  color: ${StudyColors.paragraph}
`;
