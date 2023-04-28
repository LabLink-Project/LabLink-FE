import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { fontColors } from 'src/shared/designColors';

export const StStudyWrap = styled.li`
  padding: 10px 12px;
  border-radius: 12px;

  background-color: ${fontColors.white};

  min-width: 164px;
  max-width: 164px;
  min-height: 158px;
  max-height: 158px;
`;

export const StFlexWrap = styled(StFlexBox)`
  margin-bottom: 8px;
`;

export const StWrap = styled.div`
  margin-bottom: 8px;
`;
