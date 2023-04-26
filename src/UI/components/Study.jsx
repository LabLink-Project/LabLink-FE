import React, { useState } from 'react';
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
  // Study, StudyColumn에 동일한 코드가 들어있음
  // do refactoring later
  const [isBookmark, setIsBookmark] = useState(obj.isbookmarked);

  const onClickBookmarkHandler = () => {
    setIsBookmark(!isBookmark);
    bookmarkRequest();
  };

  const bookmarkRequest = async () => {
    // api.get(`/studies/:id/bookmark`);
  };

  return (
    <StStudy>
      <article>
        <StFlexBox sort="space-between">
          <StStudyOnline>
            {obj.category === 'ONLINE' ? '온라인' : '오프라인'}
          </StStudyOnline>
          <div>
            <button onClick={onClickBookmarkHandler}>
              {isBookmark ? (
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
            </button>
          </div>
        </StFlexBox>
        {/* do refactoring later */}
        <Link to={URI.crud.studys + '/' + obj.id}>
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
            {obj.category !== 'ONLINE' && ' | ' + obj.address}
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
