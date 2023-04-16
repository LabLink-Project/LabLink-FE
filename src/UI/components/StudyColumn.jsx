import React from 'react';
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

// 합성 컴포넌트 패턴으로 처리해보자
function StudyColumn({ obj }) {
  return (
    <StStudyColumn>
      <article>
        <StStudyColumnOnlineWrap sort="space-between">
          <StStudyColumnOnline>
            {obj.address === 'online' ? '온라인' : '오프라인'}
          </StStudyColumnOnline>
          <div>{'~' + convertToShortDate(obj.date)}</div>
        </StStudyColumnOnlineWrap>
        <StStudyCompany>{obj.companyName}</StStudyCompany>
        <StStudyColumnTitle>{obj.title}</StStudyColumnTitle>
        <StStudyColumnAddress>
          {obj.address !== 'online' && obj.address}
        </StStudyColumnAddress>
        <StStudyColumnPayWrap sort="space-between">
          <div>
            <StStudyColumnPay>{obj.pay}</StStudyColumnPay>원
          </div>
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
        </StStudyColumnPayWrap>
      </article>
    </StStudyColumn>
  );
}

export default StudyColumn;
