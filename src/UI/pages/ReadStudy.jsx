import React from 'react';
import Study from 'src/UI/components/Study';
import SearchBar from 'src/UI/components/SearchBar';
import {
  StReadStudyH1,
  StSearchResultWrap,
} from 'src/UI/styles/ReadStudy.styled';
import SearchHeader from 'src/UI/components/SearchHeader';
import { useLocation } from 'react-router-dom';
import useStudys from 'src/hooks/useStudys';
import { StWrap } from '../styles/StudyColumn.styled';
import FooterNav from '../components/FooterNav';
import { Strong } from '../styles/SharedStyle/Strong.style';

function ReadStudy() {
  const { state } = useLocation();
  const [studys] = useStudys(`/studies?keyword=${state.keyword}`);

  return (
    <div>
      <SearchHeader />
      <SearchBar />
      <StSearchResultWrap>
        <StWrap sort="space-between">
          <StReadStudyH1>
            {state.keyword} 검색결과 <Strong>{studys.length}</Strong>건
          </StReadStudyH1>
          {/* <select>
          <option value="">최신순</option>
          <option value="">급여순</option>
          <option value="">인기순</option>
        </select> */}
        </StWrap>
        <ul>
          {studys.length
            ? studys.map(obj => {
                return (
                  <Study
                    obj={obj}
                    key={obj.id}
                  />
                );
              })
            : '검색 결과가 없습니다 😥'}
        </ul>
      </StSearchResultWrap>
      <FooterNav />
    </div>
  );
}

export default ReadStudy;
