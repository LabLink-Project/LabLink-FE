import React from 'react';
import HomeHeader from '../components/HomeHeader';

import HomeCategoryNav from '../components/HomeCategoryNav';
import { StHomeWrap } from '../styles/Home.styled';

function Home() {
  return (
    <StHomeWrap>
      <HomeHeader />
      <HomeCategoryNav />
    </StHomeWrap>
  );
}

export default Home;
