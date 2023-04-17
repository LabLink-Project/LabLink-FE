import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StBookmarkListButtonWrap = styled.div`
  margin-bottom: 24px;
`;

export const StBookmarkListButton = styled.button`
  min-width: 167px;
  min-height: 40px;

  padding: 10px auto;

  color: ${StudyColors.paragraph};
  ${StudyFontOptions.body};
  font-weight: 600;
  border-bottom: 1px solid ${StudyColors.onlineBorder};

  &:focus {
    border-bottom: 1px solid ${StudyColors.black};
    color: ${StudyColors.black};
  }
`;

export const StBookmarkListTitle = styled.h2`
  ${StudyFontOptions.subtitle}
`;

export const StBookmarkListOptions = styled.div`
  ${StudyFontOptions.body}
`;

export const StBookmarkListWrap = styled.div`
  padding: 20px;
`;

export const StBookmarkTitles = styled(StFlexBox)`
  margin-bottom: 16px;
`;
