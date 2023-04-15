import React from 'react';
import {
  StHomeCategoryNav,
  StHomeCategoryNavButton,
} from '../styles/HomeCategoryNav.styled';

function HomeCategoryNav() {
  return (
    <StHomeCategoryNav>
      <StHomeCategoryNavButton>지역</StHomeCategoryNavButton>
      <StHomeCategoryNavButton>온라인</StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
