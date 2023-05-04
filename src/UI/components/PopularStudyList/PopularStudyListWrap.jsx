import React from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import PopularStudyLi from './PopularStudyLi';
import styled from 'styled-components';

import useStudys from 'src/hooks/useStudys';

function PopularStudyListWrap() {
  const [datas] = useStudys('/studies/search/rank');

  return (
    <StFlexBox>
      {datas.length ? (
        <>
          <StWrap>
            {datas
              .filter((_, index) => index < 5)
              .map(({ _, rankKeyword }, index) => (
                <PopularStudyLi
                  key={rankKeyword}
                  ranking={index + 1}
                >
                  {rankKeyword}
                </PopularStudyLi>
              ))}
          </StWrap>
          <StWrap>
            {datas
              .filter((_, index) => index > 4)
              .map(({ _, rankKeyword }, index) => (
                <PopularStudyLi
                  key={rankKeyword}
                  ranking={index + 6}
                >
                  {rankKeyword}
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
