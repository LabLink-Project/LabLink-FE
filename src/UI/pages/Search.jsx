import React from 'react';
import SearchBar from 'src/UI/components/SearchBar';
import {
  StDetailSearchAddressWrap,
  StDetailSearchAge,
  StDetailSearchCheckbox,
  StDetailSearchCheckboxLabel,
  StDetailSearchGenderButton,
  StDetailSearchLabel,
  StDetailSearchSaveButton,
  StDetailSearchSpan,
  StDetailSearchTitle,
  StDetailSearchUl,
  StSearchHistorys,
  StSearchHistoryTitle,
  StSearchWrap,
} from '../styles/Search.styled';
import SearchHistoryUI from '../atomics/SearchHistoryUI';
import SearchAddressHistory from '../atomics/SearchAddressHistory';

function Search() {
  const mockupData = [
    '임상실험',
    '동작구',
    '탈모',
    '단기알바',
    '임상실험',
    '동작구',
    '탈모',
    '단기알바',
  ];

  const mockupAddresses = [
    '서울 노원구',
    '서울 관악구 남현동',
    '서울 동대문구',
    '서울 관악구 낙성대동',
    '서울 도봉구',
  ];

  return (
    <StSearchWrap>
      <SearchBar placeholder="어떤 공고를 찾으세요?" />

      {/* 그냥 Flex만 처리할거면 타입을 받아서 만들고 스타일 적용해서 반환하는 건 안되나? */}
      <StSearchHistoryTitle>최근에 검색 하셨어요</StSearchHistoryTitle>
      <StSearchHistorys>
        {mockupData.map((searchedTitle, index) => {
          return <SearchHistoryUI key={index}>{searchedTitle}</SearchHistoryUI>;
        })}
      </StSearchHistorys>

      <StDetailSearchTitle>상세검색</StDetailSearchTitle>

      <div>
        <h3>
          <StDetailSearchLabel htmlFor="">지역</StDetailSearchLabel>
        </h3>
        <StDetailSearchAddressWrap>
          <input
            type="text"
            placeholder="지역명 검색하기"
          />
          <StDetailSearchSpan>{'>'}</StDetailSearchSpan>
        </StDetailSearchAddressWrap>

        <StDetailSearchUl>
          {mockupAddresses.map((address, index) => {
            return (
              <SearchAddressHistory
                key={index}
                content={address}
              />
            );
          })}
        </StDetailSearchUl>
      </div>

      <div>
        <h3>
          <StDetailSearchLabel htmlFor="">성별</StDetailSearchLabel>
        </h3>
        <div>
          <StDetailSearchGenderButton autoFocus>
            남자
          </StDetailSearchGenderButton>
          <StDetailSearchGenderButton>여자</StDetailSearchGenderButton>
        </div>
      </div>
      <div>
        <h3>
          <StDetailSearchLabel htmlFor="">연령</StDetailSearchLabel>
        </h3>
        <StDetailSearchAge
          type="text"
          placeholder="20세"
        />
        <div>
          <StDetailSearchCheckbox type="checkbox" />
          {/* label 높이 문제 남아있다!! */}
          <StDetailSearchCheckboxLabel htmlFor="">
            연령무관
          </StDetailSearchCheckboxLabel>
        </div>
      </div>
      <div>
        <h3>
          <StDetailSearchLabel htmlFor="">공고 분류</StDetailSearchLabel>
        </h3>
        <div>
          <StDetailSearchGenderButton>온라인</StDetailSearchGenderButton>
          <StDetailSearchGenderButton>오프라인</StDetailSearchGenderButton>
        </div>
      </div>
      <StDetailSearchSaveButton>저장하기</StDetailSearchSaveButton>
    </StSearchWrap>
  );
}

export default Search;
