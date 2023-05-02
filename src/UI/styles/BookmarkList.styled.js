import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled, { css } from 'styled-components';
import { StFlexBox } from './common.styled';
import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';

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
  border-bottom: 1px solid ${fontColors.line};

  ${props =>
    props.current &&
    css`
      color: ${fontColors.title};
      ${fontOptions.emphasize};
      border-bottom: 2px solid ${fontColors.title};
    `}
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
