import React, { useEffect, useState } from 'react';
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
  StDetailSearchWrap,
  StSearchHistorys,
  StSearchHistoryTitle,
  StSearchWrap,
} from '../styles/Search.styled';
import SearchHistoryUI from '../atomics/SearchHistoryUI';
import SearchAddressHistory from '../atomics/SearchAddressHistory';
import { StFlexBox } from '../styles/common.styled';
import { useInput } from 'src/hooks/useInput';
import { apiWithJWT } from 'src/api/api';
import { StReadStudyH1 } from '../styles/ReadStudy.styled';
import Study from '../components/Study';

function Search() {
  // choose page render state
  const [isSearch, setIsSearch] = useState(false);

  // normal search code
  const [keyword, keywordHandler] = useInput('');
  const [history, setHistory] = useState([]);

  const onSearchHandler = () => {
    // 검색기록 같은 경우 배열을 string화: json.stringify/parse해서 처리하자
    // localStorage.setItem('history', keyword);
    updateSearchHistory();
    searchRequest();
    setIsSearch(true);
  };

  useEffect(() => {
    // do refactor later
    const historyString = localStorage.getItem('history');
    const historyLog = JSON.parse(historyString);
    if (historyLog) setHistory([...historyLog.reverse()]);

    // console.log(historyLog);
  }, []);

  const updateSearchHistory = () => {
    // do refactoring later

    // 1. history is null
    // history = null => ...history code occur error
    // so, use setHistory([keyword])
    // -> not null ever, doesn't change value in useEffect

    // 2. history is array
    // history = array => ...history = elements
    // so, use setHistory[...history, keyword]

    history.push(keyword);
    setHistory([...history]);
    const historyStr = JSON.stringify(history);
    localStorage.setItem('history', historyStr);
  };

  // history 삭제 기능 나중에 구현

  const searchRequest = async () => {
    const res = await apiWithJWT.get(`/studies?keyword=${keyword}`);
    console.log(res);
    setStudys([...res.data.data]);
  };

  // 상세검색 구현 로직 나중에 구현
  // const [areaHistory, setAreaHistory] = useState([]);

  // search 결과를 담을 state
  const [studys, setStudys] = useState([]);

  const mockupAddresses = [
    '서울 노원구',
    '서울 관악구 남현동',
    '서울 동대문구',
    '서울 관악구 낙성대동',
    '서울 도봉구',
  ];

  return (
    <StSearchWrap>
      <SearchBar
        placeholder="어떤 공고를 찾으세요?"
        handler={keywordHandler}
        onEnterHandler={onSearchHandler}
      />
      {!isSearch ? (
        <>
          {/* Search 코드 */}
          {/* 그냥 Flex만 처리할거면 타입을 받아서 만들고 스타일 적용해서 반환하는 건 안되나? */}
          <StSearchHistoryTitle>최근에 검색 하셨어요</StSearchHistoryTitle>
          <StSearchHistorys>
            {history.map((searchedTitle, index) => {
              return (
                <SearchHistoryUI
                  key={index}
                  handler={setHistory}
                >
                  {searchedTitle}
                </SearchHistoryUI>
              );
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

          <StDetailSearchWrap>
            <h3>
              <StDetailSearchLabel htmlFor="">성별</StDetailSearchLabel>
            </h3>
            <div>
              <StDetailSearchGenderButton>남자</StDetailSearchGenderButton>
              <StDetailSearchGenderButton>여자</StDetailSearchGenderButton>
            </div>
          </StDetailSearchWrap>
          <StDetailSearchWrap>
            <h3>
              <StDetailSearchLabel htmlFor="">연령</StDetailSearchLabel>
            </h3>
            <StDetailSearchAge
              type="text"
              placeholder="20세"
            />
            <StFlexBox>
              <StDetailSearchCheckbox type="checkbox" />
              <StDetailSearchCheckboxLabel htmlFor="">
                연령무관
              </StDetailSearchCheckboxLabel>
            </StFlexBox>
          </StDetailSearchWrap>
          <div>
            <h3>
              <StDetailSearchLabel htmlFor="">공고 분류</StDetailSearchLabel>
            </h3>
            <div>
              <StDetailSearchGenderButton>온라인</StDetailSearchGenderButton>
              <StDetailSearchGenderButton>오프라인</StDetailSearchGenderButton>
            </div>
          </div>
          <StDetailSearchSaveButton onClick={onSearchHandler}>
            저장하기
          </StDetailSearchSaveButton>
        </>
      ) : (
        <>
          {/* Search 결과 코드 */}
          <StFlexBox sort="space-between">
            <StReadStudyH1>
              {keyword}으로 검색결과 {studys.length}건
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
            {studys.map(obj => {
              return (
                <Study
                  obj={obj}
                  key={obj.id}
                />
              );
            })}
          </ul>
        </>
      )}
    </StSearchWrap>
  );
}

export default Search;
