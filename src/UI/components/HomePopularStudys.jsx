import React from 'react';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import {
  StHomePopularStudysH2,
  StHomeStudysUl,
} from '../styles/HomePopularStudy.styled';
import StudyColumn from './StudyColumn';
import useReduxState from 'src/hooks/useReduxState';
import useStudys from 'src/hooks/useStudys';

function HomePopularStudys() {
  const [studys] = useStudys('/studies?sortedType=popularity');
  const address = useReduxState('detailAddress');

  return (
    <div>
      <StHomePopularStudysH2>오늘의 인기 공고</StHomePopularStudysH2>
      <StHomeStudysUl>
        {studys
          .filter(obj => {
            if (address === '전체') return obj;
            return obj.address === address;
          })
          .filter((_, index) => {
            return index < 4;
          })
          .map(obj => {
            return (
              <StudyColumn
                obj={obj}
                key={obj.id}
              />
            );
          })}
      </StHomeStudysUl>
      {/* 추가로 수정해야 할 부분 */}
      <StFlexBox sort="center">
        <StHomeBannerCircle current />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox>
    </div>
  );
}

export default HomePopularStudys;
