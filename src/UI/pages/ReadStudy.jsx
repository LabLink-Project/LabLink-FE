import React, { useRef } from 'react';
import Study from 'src/UI/components/Study';
import SearchBar from 'src/UI/components/SearchBar';
import { StFlexBox } from 'src/UI/styles/common.styled';
import { StReadStudyH1, StReadStudyWrap } from 'src/UI/styles/ReadStudy.styled';
import SearchHeader from 'src/UI/components/SearchHeader';
import { useLocation } from 'react-router-dom';
import useStudys from 'src/hooks/useStudys';

function ReadStudy() {
  const { state } = useLocation();
  // console.log(state);

  const keyword = useRef(state.keyword);
  // console.log(keyword);

  const [studys] = useStudys(`/studies?keyword=${keyword.current}`);
  // console.log(studys);

  return (
    <StReadStudyWrap>
      <SearchHeader />
      {/* SearchBar 재사용 가능하게 수정해보자 : 채팅, 상세검색(주소), 일반 검색에만 사용 */}
      <SearchBar />
      <StFlexBox sort="space-between">
        <StReadStudyH1>
          {keyword.current}로 검색결과 {studys.length}건
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
    </StReadStudyWrap>
  );
}

export default ReadStudy;
