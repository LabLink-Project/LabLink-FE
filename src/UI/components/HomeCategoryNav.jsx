import React from 'react';
import {
  StHomeCategoryNav,
  StHomeCategoryNavButton,
} from '../styles/HomeCategoryNav.styled';
import useHomeAddress from 'src/hooks/useHomeAddress';

function HomeCategoryNav() {
  const [allHandler, onlineHandler, offlineHandler] = useHomeAddress();

  return (
    <StHomeCategoryNav>
      <StHomeCategoryNavButton onClick={allHandler}>
        전체
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton onClick={onlineHandler}>
        지역
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton onClick={offlineHandler}>
        온라인
      </StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
