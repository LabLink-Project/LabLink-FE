import { useNavigate } from 'react-router-dom';
import React from 'react';
import { serviceColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

function PopularStudyLi({ children, ranking }) {
  const navigate = useNavigate();

  const onSearchHandler = () => {
    console.log('entered search bar : ', children);
    navigate('/studys', { state: { keyword: children } });
  };

  return (
    <StStudyLi onClick={onSearchHandler}>
      <StSpan>{ranking}</StSpan>
      {children}
    </StStudyLi>
  );
}

export default PopularStudyLi;

const StStudyLi = styled.li`
  display: flex;
  margin-bottom: 8px;
  ${fontOptions.body1};
  cursor: pointer;
`;

const StSpan = styled.div`
  min-width: 16px;
  margin-right: 9px;
  color: ${serviceColors.primary};
  ${fontOptions.emphasize};
  overflow: hidden;
`;
