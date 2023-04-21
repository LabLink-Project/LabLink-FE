import React, { useEffect, useState } from 'react';
import { StHomeCurrentStudyH2 } from '../styles/HomeCurrentStudy.styled';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import StudyColumn from './StudyColumn';
import { StHomeStudysUl } from '../styles/HomePopularStudy.styled';

function HomeCurrentStudy() {
  const [studys, setStudys] = useState([]);

  const getStudyHistory = () => {
    const history = sessionStorage.getItem('studyshistory');
    const historyLog = JSON.parse(history);
    if (historyLog) setStudys([...historyLog]);
  };

  useEffect(() => {
    getStudyHistory();
  }, []);

  return (
    <div>
      <StHomeCurrentStudyH2>최근 본 공고</StHomeCurrentStudyH2>
      <StHomeStudysUl>
        {studys
          .filter((obj, index) => index < 2)
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

export default HomeCurrentStudy;
