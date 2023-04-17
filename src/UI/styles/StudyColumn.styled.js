import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StStudyColumn = styled.li`
  min-width: 164px;
  max-width: 164px;
  min-height: 164px;
  max-height: 164px;
  font-size: 12px;
  background-color: ${StudyColors.bg};

  padding: 12px;
  box-sizing: border-box;

  position: relative;
`;

export const StStudyColumnOnline = styled.div`
  padding: 2px 10px;

  background-color: ${StudyColors.body};
  color: ${StudyColors.white};
  ${StudyFontOptions.caption}
`;

export const StStudyColumnOnlineWrap = styled(StFlexBox)`
  margin-bottom: 8px;
`;

export const StStudyColumnTitle = styled.p`
  margin-bottom: 4px;
`;

export const StStudyColumnAddress = styled.div`
  margin-bottom: 14px;
`;

export const StStudyColumnPay = styled.strong`
  color: ${StudyColors.black};
  ${StudyFontOptions.title}
`;

export const StStudyColumnPayWrap = styled(StFlexBox)`
  position: absolute;
  left: 12px;
  bottom: 12px;
  right: 12px;
`;
