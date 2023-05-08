import React from 'react';
import { StStudy, StStudyWrap } from 'src/UI/styles/Study.styled';
import { Link } from 'react-router-dom';
import { StFlexWrap } from '../styles/StudyColumn.styled';
import Place from '../atomics/popularStudy/Place';
import Bookmark from '../atomics/popularStudy/Bookmark';
import CompanyName from '../atomics/popularStudy/CompanyName';

import Pay from '../atomics/popularStudy/Pay';
import { URI } from 'src/shared/URIs';
import { StFlexBox } from '../styles/common.styled';
import Deadline from '../atomics/Study/Deadline';
import Address from '../atomics/Study/Address';
import sectionLine from 'src/assets/design/sectionLine.svg';
import styled from 'styled-components';
import Title2 from '../atomics/Study/Title2';

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
        <StStudyWrap>
          <Link to={`${URI.crud.studys}/${obj.id}`}>
            <CompanyName>{obj.companyName}</CompanyName>
            <Title2>{obj.title}</Title2>
          </Link>
        </StStudyWrap>
        <StFlexBox sort="space-between">
          <StFlexBox>
            {obj.address === 'ONLINE' ? (
              ''
            ) : (
              <>
                <Address>{obj.address}</Address>
                <StImg
                  src={sectionLine}
                  alt="구분선"
                />
              </>
            )}

            <Deadline>{obj.date}</Deadline>
          </StFlexBox>
          <Pay>{obj.pay}</Pay>
        </StFlexBox>
      </article>
    </StStudy>
  );
}

export default Study;

const StImg = styled.img`
  margin: 0 4px;
`;
