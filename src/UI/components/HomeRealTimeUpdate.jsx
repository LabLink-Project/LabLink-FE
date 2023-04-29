import React, { useEffect, useState } from 'react';
import Study from './Study';
import {
  StHomeRealTimeMoreButton,
  StHomeRealTimeMoreSpan,
  StHomeRealTimeUpdateH2,
} from '../styles/HomeRealTimeUpdate.styled';
import triangle from 'src/assets/triangle.svg';
import { apiWithJWT } from 'src/api/api';

function HomeRealTimeUpdate() {
  const [studys, setStudys] = useState([]);

  const getStudy = async () => {
    const response = await apiWithJWT.get('/studies');
    // console.log('realtime studys : ', response.data.data);
    setStudys([...response.data.data]);
  };

  useEffect(() => {
    getStudy();
  }, []);

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
