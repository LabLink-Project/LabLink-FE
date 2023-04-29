import React from 'react';
import Study from './Study';
import {
  StHomeRealTimeMoreButton,
  StHomeRealTimeMoreSpan,
  StHomeRealTimeUpdateH2,
} from '../styles/HomeRealTimeUpdate.styled';
import triangle from 'src/assets/triangle.svg';
import useStudys from 'src/hooks/useStudys';

function HomeRealTimeUpdate() {
  const [studys] = useStudys('/studies');

  return (
    <div>
      <StHomeRealTimeUpdateH2>실시간 업데이트</StHomeRealTimeUpdateH2>
      <ul>
        {studys.map(obj => {
          return (
            <Study
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </ul>
      <StHomeRealTimeMoreButton>
        <StHomeRealTimeMoreSpan>더 보기</StHomeRealTimeMoreSpan>
        <img
          src={triangle}
          alt="삼각형"
        />
      </StHomeRealTimeMoreButton>
    </div>
  );
}

export default HomeRealTimeUpdate;
