import React from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import PopularStudyLi from './PopularStudyLi';
import styled from 'styled-components';

function PopularStudyListWrap() {
  const datas = [
    { score: 1, keyword: '당일 테스트' },
    { score: 2, keyword: '서울' },
    { score: 3, keyword: 'UT' },
    { score: 4, keyword: '병원 테스트' },
    { score: 5, keyword: '탈모 환자 실험' },
    { score: 6, keyword: '대학 실험' },
    { score: 7, keyword: '사용성 테스트' },
    { score: 8, keyword: '리서치' },
    { score: 9, keyword: '한양대학교' },
    { score: 10, keyword: '연구' },
  ];

  return (
    <StFlexBox>
      {datas ? (
        <>
          <StWrap>
            {datas
              .filter(data => data.score < 6)
              .map(({ score, keyword }) => (
                <PopularStudyLi
                  key={keyword}
                  ranking={score}
                >
                  {keyword}
                </PopularStudyLi>
              ))}
          </StWrap>
          <StWrap>
            {datas
              .filter(data => data.score > 5)
              .map(({ score, keyword }) => (
                <PopularStudyLi
                  key={keyword}
                  ranking={score}
                >
                  {keyword}
                </PopularStudyLi>
              ))}
          </StWrap>
        </>
      ) : (
        '실시간 인기 검색어가 존재하지 않아요 😥'
      )}
    </StFlexBox>
  );
}

export default PopularStudyListWrap;

export const StWrap = styled.div`
  min-width: 171px;
`;
