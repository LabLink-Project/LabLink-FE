import React from 'react';
import SearchBar from 'src/UI/components/SearchBar';
import {
  StSearchHistorys,
  StSearchHistoryTitle,
} from '../styles/Search.styled';
import SearchHistoryUI from '../atomics/SearchHistoryUI';
import PopularStudyListWrap from '../components/PopularStudyList/PopularStudyListWrap';
import useStudys from 'src/hooks/useStudys';
import SearchHeader from '../components/SearchHeader';

function Search() {
  const [history] = useStudys('/studies/search/latest');

  return (
    <div>
      <SearchHeader />
      <SearchBar placeholder="어떤 공고를 찾으세요?" />
      {/* Search 코드 */}
      <StSearchHistoryTitle>최근에 검색 하셨어요</StSearchHistoryTitle>
      <StSearchHistorys>
        {history.length
          ? history.map(({ latestKeyword }, index) => {
              return (
                <SearchHistoryUI key={index}>{latestKeyword}</SearchHistoryUI>
              );
            })
          : '최근에 검색한 공고가 없어요 😥'}
      </StSearchHistorys>

      {/* 인기 검색어 구현 */}
      <StSearchHistoryTitle>실시간 인기 검색어</StSearchHistoryTitle>
      <StSearchHistorys>
        <PopularStudyListWrap />
      </StSearchHistorys>
    </div>
  );
}

export default Search;
