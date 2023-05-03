import React from 'react';
import { Link } from 'react-router-dom';

import { StFlexWrap, StStudyWrap, StWrap } from '../styles/StudyColumn.styled';

import Place from '../atomics/popularStudy/Place';
import Bookmark from '../atomics/popularStudy/Bookmark';
import CompanyName from '../atomics/popularStudy/CompanyName';
import Title from '../atomics/popularStudy/Title';
import Deadline from '../atomics/popularStudy/Deadline';
import Pay from '../atomics/popularStudy/Pay';
import { URI } from 'src/shared/URIs';

// 합성 컴포넌트 패턴으로 처리해보자 도전!!
function StudyColumn({ obj }) {
  return (
    <StStudyWrap>
      <article>
        <StFlexWrap sort="space-between">
          <Place category={obj.category} />
          <Bookmark
            id={obj.id}
            isbookmarked={obj.isbookmarked}
          />
        </StFlexWrap>
        <StWrap>
          <Link to={`${URI.crud.studys}/${obj.id}`}>
            <CompanyName>{obj.companyName}</CompanyName>
            <Title>{obj.title}</Title>
          </Link>
        </StWrap>
        <div>
          <Deadline>{obj.date}</Deadline>
          <Pay>{obj.pay}</Pay>
        </div>
      </article>
    </StStudyWrap>
  );
}

export default StudyColumn;
