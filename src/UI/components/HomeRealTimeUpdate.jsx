import React from 'react';
import Study from './Study';
import {
  StHomeRealTimeMoreButton,
  StHomeRealTimeMoreSpan,
  StHomeRealTimeUpdateH2,
} from '../styles/HomeRealTimeUpdate.styled';
import triangle from 'src/assets/triangle.svg';

function HomeRealTimeUpdate() {
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
      <StHomeRealTimeUpdateH2>실시간 업데이트</StHomeRealTimeUpdateH2>
      <ul>
        {mockupData.map(obj => {
          return (
            <Study
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </ul>
      <StHomeRealTimeMoreButton>
        <StHomeRealTimeMoreSpan>더 보기</StHomeRealTimeMoreSpan>
        <img
          src={triangle}
          alt="삼각형"
        />
      </StHomeRealTimeMoreButton>
    </div>
  );
}

export default HomeRealTimeUpdate;
