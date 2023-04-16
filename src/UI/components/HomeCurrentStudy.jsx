import React from 'react';
import { StHomeCurrentStudyH2 } from '../styles/HomeCurrentStudy.styled';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import StudyColumn from './StudyColumn';
import { StHomeStudysUl } from '../styles/HomePopularStudy.styled';

function HomeCurrentStudy() {
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
      <StHomeCurrentStudyH2>최근 본 공고</StHomeCurrentStudyH2>
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

export default HomeCurrentStudy;
