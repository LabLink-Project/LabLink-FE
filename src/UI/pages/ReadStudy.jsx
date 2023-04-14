import React from 'react';
import Study from 'src/UI/components/Study';
import SearchBar from 'src/UI/components/SearchBar';
import { StFlexBox } from 'src/UI/styles/common.styled';
import { StReadStudyH1, StReadStudyWrap } from 'src/UI/styles/ReadStudy.styled';
import SearchHeader from 'src/UI/components/SearchHeader';

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
    <StReadStudyWrap>
      <SearchHeader />
      <SearchBar />
      <StFlexBox sort="space-between">
        <StReadStudyH1>
          {'*'}으로 검색결과 {'n'}건
        </StReadStudyH1>
        <select>
          {/* 이 부분은 모달로 처리하네..? */}
          <option value="">최신순</option>
          <option value="">급여순</option>
          <option value="">인기순</option>
        </select>
      </StFlexBox>
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
    </StReadStudyWrap>
  );
}

export default ReadStudy;
