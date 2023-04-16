import React from 'react';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import {
  StHomePopularStudysH2,
  StHomeStudysUl,
} from '../styles/HomePopularStudy.styled';
import StudyColumn from './StudyColumn';

function HomePopularStudys() {
  const mockupData = [
    {
      id: 1,
      title: 'APP 사용성테스트 지원자 모집',
      category: 'UT',
      companyName: '(주)항해99',
      companyHeat: 75,
      date: '2023-04-03 22:34',
      pay: '10000',
      address: 'online',
      isBookmarked: true,
    },
    {
      id: 2,
      title: 'APP 사용성테스트 지원자 모집',
      category: 'UT',
      companyName: '(주)항해99',
      companyHeat: 75,
      date: '2023-04-03 22:34',
      pay: '10000',
      address: 'online',
      isBookmarked: true,
    },
    {
      id: 3,
      title: 'CT 받아보실 분',
      category: '실험',
      companyName: 'CNU Hospital',
      companyHeat: 90,
      date: '2023-10-03 22:34',
      pay: '10000',
      address: '지역',
      isBookmarked: false,
    },
    {
      id: 4,
      title: 'UT 해주세요',
      category: '실험',
      companyName: 'LabLink',
      companyHeat: 90,
      date: '2023-10-03 22:34',
      pay: '10000',
      address: '지역',
      isBookmarked: false,
    },
  ];

  return (
    <div>
      <StHomePopularStudysH2>오늘의 인기 공고</StHomePopularStudysH2>
      <StHomeStudysUl>
        {mockupData.map(obj => {
          return (
            <StudyColumn
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </StHomeStudysUl>
      <StFlexBox sort="center">
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox>
    </div>
  );
}

export default HomePopularStudys;
