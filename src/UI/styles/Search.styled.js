import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled, { css } from 'styled-components';
import { StCheckbox } from './common.styled';
import { StButton } from './Button.styled';

export const StSearchWrap = styled.div`
  padding: 20px;
`;

export const StSearchHistoryTitle = styled.h2`
  margin: 32px 0 16px;
  ${StudyFontOptions.title}
`;

export const StSearchHistorys = styled.ul`
  display: flex;
  overflow: scroll;

  /* 크롬, 사파리, 오페라, 엣지 지원 */
  /* 나머지 지원은 찾아보자 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StDetailSearchTitle = styled.h2`
  margin: 24px 0 32px;
  ${StudyFontOptions.title}
`;

export const StDetailSearchLabel = styled.label`
  margin-bottom: 16px;
  ${StudyFontOptions.subtitle}
`;

export const StDetailSearchAddressWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${StudyColors.placeholder};
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const StDetailSearchSpan = styled.span`
  color: ${StudyColors.placeholder};
`;

export const StDetailSearchUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const StDetailSearchGenderButton = styled(StButton);

export const StDetailSearchAge = styled.input`
  min-width: 335px;
  box-sizing: border-box;

  padding: 10px 12px;
  border: 1px solid ${StudyColors.buttonBorder};
  margin-bottom: 12px;
`;

export const StDetailSearchCheckbox = styled(StCheckbox);

export const StDetailSearchCheckboxLabel = styled.label`
  color: ${StudyColors.buttonBorder};
`;

export const StDetailSearchSaveButton = styled.button`
  min-width: 335px;
  min-height: 40px;

  margin-top: 32px;
  border: 1px solid ${StudyColors.buttonBorder};
  padding: 16px 0px;

  background-color: ${StudyColors.buttonFocus};
  color: ${StudyColors.white};
`;
