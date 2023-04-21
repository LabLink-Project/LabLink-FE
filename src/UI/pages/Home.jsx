import React, { useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';

import HomeCategoryNav from '../components/HomeCategoryNav';
import { StHomeWrap } from '../styles/Home.styled';
import HomeBanner from '../atomics/HomeBanner';

import HomePopularStudys from '../components/HomePopularStudys';
import HomeSelectAddress from '../atomics/HomeSelectAddress';
import HomeCurrentStudy from '../components/HomeCurrentStudy';
import HomeRealTimeUpdate from '../components/HomeRealTimeUpdate';
import FooterNav from '../components/FooterNav';

import { useDispatch } from 'react-redux';
import { getAccountInfo } from 'src/redux/modules/accountHandler';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // do refactoring later
    const token = document.cookie.split('=')[1];
    if (token) dispatch(getAccountInfo(token));
  }, []);

  return (
    <StHomeWrap>
      <HomeHeader />
      <HomeCategoryNav />
      <HomeBanner />
      <HomeSelectAddress />
      <HomePopularStudys />
      <HomeCurrentStudy />
      <HomeRealTimeUpdate />
      <FooterNav />
    </StHomeWrap>
  );
}

export default Home;
