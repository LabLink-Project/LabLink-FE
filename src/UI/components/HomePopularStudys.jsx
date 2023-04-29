import React, { useEffect, useState } from 'react';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import {
  StHomePopularStudysH2,
  StHomeStudysUl,
} from '../styles/HomePopularStudy.styled';
import StudyColumn from './StudyColumn';
import { apiWithJWT } from 'src/api/api';

function HomePopularStudys() {
  const [studys, setStudys] = useState([]);
  const getStudys = async () => {
    const response = await apiWithJWT.get('/studies?sortedType=popularity');
    // console.log('popular studys : ', response.data.data);
    setStudys([...response.data.data]);
  };

  useEffect(() => {
    getStudys();
  }, []);

  return (
    <div>
      <StHomePopularStudysH2>오늘의 인기 공고</StHomePopularStudysH2>
      <StHomeStudysUl>
        {studys
          .filter((obj, index) => {
            return index < 4;
          })
          .map(obj => {
            return (
              <StudyColumn
                obj={obj}
                key={obj.id}
              />
            );
          })}
      </StHomeStudysUl>
      <StFlexBox sort="center">
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
        <StHomeBannerCircle />
      </StFlexBox>
    </div>
  );
}

export default HomePopularStudys;
