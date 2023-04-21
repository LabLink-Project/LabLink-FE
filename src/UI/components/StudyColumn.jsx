import React, { useState } from 'react';
import { StFlexBox } from 'src/UI/styles/common.styled';
import {
  StStudyCompany,
  StStudyDateAndAddress,
  StStudyPrice,
} from 'src/UI/styles/Study.styled';
import { convertToShortDate } from 'src/utils/formatDate';
import {
  StStudyColumn,
  StStudyColumnAddress,
  StStudyColumnOnline,
  StStudyColumnOnlineWrap,
  StStudyColumnPay,
  StStudyColumnPayWrap,
  StStudyColumnTitle,
} from '../styles/StudyColumn.styled';

import filledHeart from 'src/assets/Favorite_on.svg';
import outlineHeart from 'src/assets/Favorite_off.svg';
import { Link } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { apiWithJWT } from 'src/api/api';

// 합성 컴포넌트 패턴으로 처리해보자
function StudyColumn({ obj }) {
  const [isbookmark, setIsBookmark] = useState(obj.isbookmarked);

  const onClickBookmarkHandler = () => {
    setIsBookmark(!isbookmark);
    bookmarkRequest();
  };

  const bookmarkRequest = async () => {
    const response = await apiWithJWT.post(`/studies/${obj.id}/bookmark`);
    console.log(response.data);
  };

  return (
    <StStudyColumn>
      <article>
        <StStudyColumnOnlineWrap sort="space-between">
          <StStudyColumnOnline>
            {obj.category === 'ONLINE' ? '온라인' : '오프라인'}
          </StStudyColumnOnline>
          <div>{'~' + convertToShortDate(obj.date)}</div>
        </StStudyColumnOnlineWrap>
        {/* do refactoring later */}
        <Link to={URI.crud.studys + '/' + obj.id}>
          <StStudyCompany>{obj.companyName}</StStudyCompany>
          <StStudyColumnTitle>{obj.title}</StStudyColumnTitle>
        </Link>
        <StStudyColumnAddress>
          {obj.address !== 'ONLINE' && obj.address}
        </StStudyColumnAddress>
        <StStudyColumnPayWrap sort="space-between">
          <div>
            <StStudyColumnPay>{obj.pay}</StStudyColumnPay>원
          </div>
          <div>
            <button onClick={onClickBookmarkHandler}>
              {isbookmark ? (
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
        </StStudyColumnPayWrap>
      </article>
    </StStudyColumn>
  );
}

export default StudyColumn;
