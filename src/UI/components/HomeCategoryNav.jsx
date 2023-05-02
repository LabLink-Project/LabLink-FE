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
        current={address === 'ALL' ? true : false}
      >
        전체
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton
        onClick={offlineHandler}
        current={address === 'OFFLINE' ? true : false}
      >
        지역
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton
        onClick={onlineHandler}
        current={address === 'ONLINE' ? true : false}
      >
        온라인
      </StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
