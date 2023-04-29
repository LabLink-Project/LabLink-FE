import React, { useEffect, useState } from 'react';
import {
  StHomeCategoryNav,
  StHomeCategoryNavButton,
} from '../styles/HomeCategoryNav.styled';

import { useDispatch } from 'react-redux';
import { getStudyType } from 'src/redux/modules/studyHandler';

function HomeCategoryNav() {
  const [address, setAddress] = useState('all');

  const onClickOnlineHandler = () => setAddress('online');
  const onClickOfflineHandler = () => setAddress('offline');

  const dispatch = useDispatch(state => state);

  useEffect(() => {
    dispatch(getStudyType(address));
  }, [address]);

  return (
    <StHomeCategoryNav>
      {/* 보더 2px 늘어나는 거 생각해서 수정해라 */}
      <StHomeCategoryNavButton onClick={onClickOfflineHandler}>
        지역
      </StHomeCategoryNavButton>
      <StHomeCategoryNavButton onClick={onClickOnlineHandler}>
        온라인
      </StHomeCategoryNavButton>
    </StHomeCategoryNav>
  );
}

export default HomeCategoryNav;
