import React from 'react';
import {
  StHomeCategoryNav,
  StHomeCategoryNavButton,
} from '../styles/HomeCategoryNav.styled';

function HomeCategoryNav() {
  return (
    <StHomeCategoryNav>
      {/* 보더 2px 늘어나는 거 생각해서 수정해라 */}
      <StHomeCategoryNavButton>지역</StHomeCategoryNavButton>
      <StHomeCategoryNavButton>온라인</StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
