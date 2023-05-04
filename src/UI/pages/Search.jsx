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
import FooterNav from '../components/FooterNav';
import PopularStudyListWrap from '../components/PopularStudyList/PopularStudyListWrap';
import useStudys from 'src/hooks/useStudys';
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../components/SearchHeader';

function Search() {
  // normal search code

  const [history] = useStudys('/studies/search/latest');

  // 검색기록 같은 경우 배열을 string화: json.stringify/parse해서 처리하자
  // localStorage.setItem('history', keyword);
  // updateSearchHistory();
  // searchRequest();

  // do refactor later
  // const historyString = localStorage.getItem('history');
  // const historyLog = JSON.parse(historyString);
  // if (historyLog) setHistory([...historyLog.reverse()]);
  // console.log(historyLog);

  // 1. history is null
  // history = null => ...history code occur error
  // so, use setHistory([keyword])
  // -> not null ever, doesn't change value in useEffect
  // 2. history is array
  // history = array => ...history = elements
  // so, use setHistory[...history, keyword]

  // const updateSearchHistory = () => {
  //   history.push(keyword);
  //   setHistory([...history]);
  //   const historyStr = JSON.stringify(history);
  //   localStorage.setItem('history', historyStr);
  // };

  // history 삭제 기능 나중에 구현

  // const searchRequest = async () => {
  //   const res = await apiWithJWT.get(`/studies?keyword=${keyword}`);
  //   console.log(res);
  //   // setStudys([...res.data.data]);
  // };

  // 상세검색 구현 로직 나중에 구현
  // const [areaHistory, setAreaHistory] = useState([]);

  return (
    <StSearchWrap>
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
      <FooterNav />
    </StSearchWrap>
  );
}

// 상세 검색 컴포넌트
//  <StDetailSearchTitle>상세검색</StDetailSearchTitle>
//       <div>
//         <h3>
//           <StDetailSearchLabel htmlFor="">지역</StDetailSearchLabel>
//         </h3>
//         <StDetailSearchAddressWrap>
//           <input
//             type="text"
//             placeholder="지역명 검색하기"
//           />
//           <StDetailSearchSpan>{'>'}</StDetailSearchSpan>
//         </StDetailSearchAddressWrap>

//         <StDetailSearchUl>
//           <SearchAddressHistory
//             key={index}
//             content={address}
//           />
//         </StDetailSearchUl>
//       </div>

//       <StDetailSearchWrap>
//         <h3>
//           <StDetailSearchLabel htmlFor="">성별</StDetailSearchLabel>
//         </h3>
//         <div>
//           <StDetailSearchGenderButton>남자</StDetailSearchGenderButton>
//           <StDetailSearchGenderButton>여자</StDetailSearchGenderButton>
//         </div>
//       </StDetailSearchWrap>
//       <StDetailSearchWrap>
//         <h3>
//           <StDetailSearchLabel htmlFor="">연령</StDetailSearchLabel>
//         </h3>
//         <StDetailSearchAge
//           type="text"
//           placeholder="20세"
//         />
//         <StFlexBox>
//           <StDetailSearchCheckbox type="checkbox" />
//           <StDetailSearchCheckboxLabel htmlFor="">
//             연령무관
//           </StDetailSearchCheckboxLabel>
//         </StFlexBox>
//       </StDetailSearchWrap>
//       <div>
//         <h3>
//           <StDetailSearchLabel htmlFor="">공고 분류</StDetailSearchLabel>
//         </h3>
//         <div>
//           <StDetailSearchGenderButton>온라인</StDetailSearchGenderButton>
//           <StDetailSearchGenderButton>오프라인</StDetailSearchGenderButton>
//         </div>
//       </div>
//       <StDetailSearchSaveButton onClick={onSearchHandler}>
//         저장하기
//       </StDetailSearchSaveButton>

// search 결과를 담을 state
// const [studys, setStudys] = useState([]);

// const mockupAddresses = [
//   '서울 노원구',
//   '서울 관악구 남현동',
//   '서울 동대문구',
//   '서울 관악구 낙성대동',
//   '서울 도봉구',
// ];

// {/* Search 결과 코드 */}
// <StFlexBox sort="space-between">
//   <StReadStudyH1>
//     {keyword}으로 검색결과 {studys.length}건
//   </StReadStudyH1>
//   <select>
//     {/* 이 부분은 모달로 처리하네..? */}
//     <option value="">최신순</option>
//     <option value="">급여순</option>
//     <option value="">인기순</option>
//   </select>
// </StFlexBox>
// <ul>
//   {/* 와이어프레임 기준 */}
//   {studys.map(obj => {
//     return (
//       <Study
//         obj={obj}
//         key={obj.id}
//       />
//     );
//   })}
// </ul>

export default Search;
