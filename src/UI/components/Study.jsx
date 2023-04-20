import React from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import {
  StStudy,
  StStudyCompany,
  StStudyCurrency,
  StStudyDateAndAddress,
  StStudyOnline,
  StStudyPrice,
} from 'src/UI/styles/Study.styled';
import { convertToShortDate } from 'src/utils/formatDate';
import filledHeart from 'src/assets/Favorite_on.svg';
import outlineHeart from 'src/assets/Favorite_off.svg';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';

// 합성 컴포넌트 패턴으로 처리해보자
function Study({ obj }) {
  return (
    <StStudy>
      <article>
        <StFlexBox sort="space-between">
          <StStudyOnline>
            {obj.address === 'online' ? '온라인' : '오프라인'}
          </StStudyOnline>
          <div>
            {obj.isBookmarked ? (
              <img
                src={filledHeart}
                alt="북마크"
              />
            ) : (
              <img
                src={outlineHeart}
                alt="북마크"
              />
            )}
          </div>
        </StFlexBox>
        <Link to={URI.crud.studyDetail}>
          <StStudyCompany>{obj.companyName}</StStudyCompany>
          <p>{obj.title}</p>
        </Link>
        <StFlexBox
          sort="space-between"
          color="sub"
        >
          <StStudyDateAndAddress>
            {/* date and address */}
            {'~' + convertToShortDate(obj.date)}
            {obj.address !== 'online' && ' | ' + obj.address}
          </StStudyDateAndAddress>
          <StStudyCurrency>
            <StStudyPrice>{obj.pay}</StStudyPrice>원
          </StStudyCurrency>
        </StFlexBox>
      </article>
    </StStudy>
  );
}

export default Study;
