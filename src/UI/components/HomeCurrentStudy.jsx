import React, { useEffect, useState } from 'react';
import {
  StHomeCurrentStudyH2,
  StHomeWrap,
} from '../styles/HomeCurrentStudy.styled';
import { StFlexBox } from '../styles/common.styled';
import { StHomeBannerCircle } from '../styles/HomeBanner.styled';
import StudyColumn from './StudyColumn';
import { StHomeStudysUl } from '../styles/HomePopularStudy.styled';
import { StMarginWrap } from '../styles/SharedStyle/MarginWrap.styled';

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
    <StHomeWrap>
      <StHomeCurrentStudyH2>최근 본 공고</StHomeCurrentStudyH2>
      <StHomeStudysUl>
        {studys.length
          ? studys
              .filter((obj, index) => index < 2)
              .map(obj => {
                return (
                  <StudyColumn
                    obj={obj}
                    key={obj.id}
                  />
                );
              })
          : '최근 본 공고를 불러오지 못했어요 😥'}
      </StHomeStudysUl>
      {/* {(
        <StFlexBox sort="center">
          <StHomeBannerCircle />
          <StHomeBannerCircle />
          <StHomeBannerCircle />
          <StHomeBannerCircle />
        </StFlexBox>
      ) && studys.length} */}
    </StHomeWrap>
  );
}

export default HomeCurrentStudy;
