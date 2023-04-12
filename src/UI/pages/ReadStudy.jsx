import React from 'react';
import Study from 'src/UI/components/Study';

function ReadStudy() {
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
      title: 'MRI 받아보실 분',
      category: '실험',
      companyName: 'KAIST',
      companyHeat: 90,
      date: '2023-10-03 22:34',
      pay: '10000',
      address: '지역',
      isBookmarked: false,
    },
  ];

  return (
    <div>
      <div>뒤로가기 / 알림</div>
      <div>검색 창</div>
      <h1>*으로 검색결과 n건</h1>
      <div>정렬기준(최신순)</div>
      <ul>
        {/* 와이어프레임 기준 */}
        {mockupData.map(obj => {
          return (
            <Study
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ReadStudy;
