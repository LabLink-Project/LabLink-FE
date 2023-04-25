import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StPayWrap = styled.div`
  ${fontOptions.caption};
  color: ${fontColors.title};
`;

export const StPay = styled.strong`
  ${fontOptions.emphasize};
  color: ${fontColors.title};
`;
