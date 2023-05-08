import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import { fontOptions } from 'src/shared/designFontOptions';
import { fontColors } from 'src/shared/designColors';

export const StHomeSelectAddressWrap = styled(StFlexBox)`
  padding: 14px 16px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: ${StudyColors.bannerBg};
`;

export const StHomeSelectAddress = styled.div`
  ${fontOptions.body1};
  color: ${fontColors.body};
`;

export const StHomeSelectAddressButton = styled.div`
  ${fontOptions.captionEmphasize};
  color: ${fontColors.title};

  &:hover {
    cursor: pointer;
  }
`;
