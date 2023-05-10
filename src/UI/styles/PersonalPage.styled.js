import { StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StPersonalPageWrap = styled.div`
  padding: 20px;
`;

export const StPersonalPageUserWrap = styled(StFlexBox)`
  margin: 16px 0 24px;
`;

export const StPersonalPageH2 = styled.h2`
  ${StudyFontOptions.title}
  font-weight: 400;
`;

export const StPersonalPageStrong = styled.strong`
  ${StudyFontOptions.title}
`;

export const StPersonalPageList = styled.li`
  padding: 16px 0;
  ${StudyFontOptions.body}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
