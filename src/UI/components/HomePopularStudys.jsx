import React from 'react';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import {
  StHomePopularStudysH2,
  StHomeStudysUl,
  StOverlap,
} from '../styles/HomePopularStudy.styled';
import StudyColumn from './StudyColumn';
import useReduxState from 'src/hooks/useReduxState';
import useStudys from 'src/hooks/useStudys';

function HomePopularStudys() {
  const [studys] = useStudys('/studies?sortedType=popularity');
  const { studyType, detailAddress } = useReduxState();

  return (
    <StOverlap>
      <StHomePopularStudysH2>오늘의 인기공고</StHomePopularStudysH2>
      <StHomeStudysUl>
        {studys.length
          ? studys
              .filter(obj => {
                if (studyType === 'ALL') return obj;
                return obj.category === studyType;
              })
              .filter(obj => {
                if (detailAddress === '전체') return obj;
                return obj.address.includes(detailAddress);
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
              })
          : '오늘의 인기 공고를 불러오지 못했어요 😥'}
      </StHomeStudysUl>
      {/* 시간 나면 추가로 수정해야 할 부분 */}
      <StFlexBox sort="center">
        <StHomeBannerCircle current />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox>
    </StOverlap>
  );
}

export default HomePopularStudys;
