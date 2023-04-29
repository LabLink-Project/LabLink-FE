import React from 'react';
import {
  StHomeCategoryNav,
  StHomeCategoryNavButton,
} from '../styles/HomeCategoryNav.styled';
import useHomeAddress from 'src/hooks/useHomeAddress';

function HomeCategoryNav() {
  const [address, allHandler, onlineHandler, offlineHandler] = useHomeAddress();

  return (
    <StHomeCategoryNav>
      <StHomeCategoryNavButton
        onClick={allHandler}
        current={address === 'all' ? true : false}
      >
        전체
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton
        onClick={onlineHandler}
        current={address === 'online' ? true : false}
      >
        지역
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton
        onClick={offlineHandler}
        current={address === 'offline' ? true : false}
      >
        온라인
      </StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
