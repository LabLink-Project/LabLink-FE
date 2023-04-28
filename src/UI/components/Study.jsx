import React from 'react';
import { StStudy } from 'src/UI/styles/Study.styled';
import { Link } from 'react-router-dom';
import { StFlexWrap, StWrap } from '../styles/StudyColumn.styled';
import Place from '../atomics/popularStudy/Place';
import Bookmark from '../atomics/popularStudy/Bookmark';
import CompanyName from '../atomics/popularStudy/CompanyName';
import Title from '../atomics/popularStudy/Title';
import Deadline from '../atomics/popularStudy/Deadline';
import Pay from '../atomics/popularStudy/Pay';

// 합성 컴포넌트 패턴으로 처리해보자
function Study({ obj }) {
  return (
    <StStudy>
      <article>
        <StFlexWrap sort="space-between">
          <Place category={obj.category} />
          <Bookmark
            id={obj.id}
            isbookmarked={obj.isbookmarked}
          />
        </StFlexWrap>
        <StWrap>
          <Link>
            <CompanyName>{obj.companyName}</CompanyName>
            <Title>공고공고제목공고공고공고고고고공고고고고고고고고</Title>
          </Link>
        </StWrap>
        <div>
          <Deadline>{obj.date}</Deadline>
          <Pay>{obj.pay}</Pay>
        </div>
      </article>
    </StStudy>
  );
}

export default Study;
