import React from 'react';
import Study from './Study';
import { StHomeRealTimeUpdateH2 } from '../styles/HomeRealTimeUpdate.styled';
import useStudys from 'src/hooks/useStudys';
import styled from 'styled-components';
import useReduxState from 'src/hooks/useReduxState';
import { StOverlap } from '../styles/HomePopularStudy.styled';

function HomeRealTimeUpdate() {
  const [studys] = useStudys('/studies');
  const { studyType, detailAddress } = useReduxState();

  return (
    <StOverlap>
      <StHomeRealTimeUpdateH2>실시간 업데이트</StHomeRealTimeUpdateH2>
      <ul>
        {studys.length
          ? studys
              .filter(obj => {
                if (studyType === 'ALL') return obj;
                return obj.category === studyType;
              })
              .filter(obj => {
                if (detailAddress === '전체') return obj;
                return obj.address === detailAddress;
              })
              .filter((_, index) => index < 5)
              .map(obj => {
                return (
                  <Study
                    obj={obj}
                    key={obj.id}
                  />
                );
              })
          : '실시간 업데이트 공고를 불러오지 못했어요 😥'}
      </ul>
    </StOverlap>
  );
}

export default HomeRealTimeUpdate;
