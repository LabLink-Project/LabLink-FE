import React from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StBookmarkListButton,
  StBookmarkListButtonWrap,
  StBookmarkListTitle,
  StBookmarkListWrap,
  StBookmarkTitles,
} from '../styles/BookmarkList.styled';
import Study from '../components/Study';

function BookmarkList() {
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
    {
      id: 3,
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
      id: 4,
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
    <StBookmarkListWrap>
      <SearchHeader title="찜 목록" />
      <StBookmarkListButtonWrap>
        <StBookmarkListButton>온라인</StBookmarkListButton>
        <StBookmarkListButton>오프라인</StBookmarkListButton>
      </StBookmarkListButtonWrap>
      <div>
        <StBookmarkTitles sort="space-between">
          <StBookmarkListTitle>내가 찜한 공고</StBookmarkListTitle>
          <div>최근 1주일</div>
        </StBookmarkTitles>
        {mockupData.map(obj => {
          return (
            <Study
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </div>
    </StBookmarkListWrap>
  );
}

export default BookmarkList;
