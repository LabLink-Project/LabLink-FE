import React from 'react';
import Study from './Study';
import { StHomeRealTimeUpdateH2 } from '../styles/HomeRealTimeUpdate.styled';
import useStudys from 'src/hooks/useStudys';
import styled from 'styled-components';
import useReduxState from 'src/hooks/useReduxState';

function HomeRealTimeUpdate() {
  const [studys] = useStudys('/studies');
  const { studyType, detailAddress } = useReduxState();

  return (
    <div>
      <StHomeRealTimeUpdateH2>실시간 업데이트</StHomeRealTimeUpdateH2>
      <ul>
        {studys
          .filter(obj => {
            if (studyType === 'ALL') return obj;
            return obj.category === studyType;
          })
          .filter(obj => {
            if (detailAddress === '전체') return obj;
            return obj.address === detailAddress;
          })
          .map(obj => {
            return (
              <Study
                obj={obj}
                key={obj.id}
              />
            );
          })}
      </ul>
      <StMarginDiv></StMarginDiv>
      {/* 더 보기 버튼 삭제, 무한 스크롤로 런칭 후 수정 예정
      <StHomeRealTimeMoreButton>
        <StHomeRealTimeMoreSpan>더 보기</StHomeRealTimeMoreSpan>
        <img
          src={triangle}
          alt="삼각형"
        />
      </StHomeRealTimeMoreButton> */}
    </div>
  );
}

const StMarginDiv = styled.div`
  margin-bottom: 54px;
`;

export default HomeRealTimeUpdate;
