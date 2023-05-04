import React from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StReadStudyDetailImage,
  StReadStudyDetailOnline,
  StReadStudyDetailDueDate,
  StReadStudyDetailHeader,
  StReadStudyDetailWrap,
  StReadStudyDetailCompany,
  StReadStudyDetailTitle,
  StReadStudyDetailDateAndPayWrap,
  StReadStudyDetailDate,
  StReadStudyDetailDateSpan,
  StReadStudyDetailPay,
  StReadStudyDetailRequireWrap,
  StReadStudyDetailRequireTitle,
  StReadStudyDetailInfoWrap,
  StReadStudyDetailInfoTitle,
  StReadStudyDetailInfoParagraph,
  StReadStudyDetailQuestion,
  StReadStudyDetailApplication,
  StParagraph,
} from '../styles/ReadStudyDetail.styled';
import { StReadStudyWrap } from '../styles/ReadStudy.styled';
import filledHeart from 'src/assets/Favorite_on.svg';
import outlineHeart from 'src/assets/Favorite_off.svg';
import { StFlexBox } from '../styles/common.styled';
import { useParams } from 'react-router-dom';
import { convertToShortDate } from 'src/utils/formatDate';
import useBookmark from 'src/hooks/useBookmark';
import useStudy from 'src/hooks/useStudy';
import styled from 'styled-components';
import { fontOptions } from 'src/shared/designFontOptions';
import { soonDevelop } from 'src/utils/soonDevelop';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import {
  formatAge,
  formatBenefit,
  formatGender,
  isDefaultImage,
  isNull,
} from 'src/utils/parseData';
import { useAccountState } from 'src/hooks/useReduxState';

function ReadStudyDetail() {
  const { id } = useParams();
  const [studys] = useStudy(`/studies/${id}`);
  const [isbookmark, BookmarkHandler] = useBookmark(id, studys.isbookmark);

  const navigate = useNavigate();
  const userType = useAccountState('role');

  const applyHandler = () => {
    if (userType !== 'USER') return alert('공고에 지원하실 수 없습니다 😥');
    if (studys.isapplied) return alert('이미 지원한 공고입니다 🥺');
    if (!studys.isapplied) navigate(`${URI.crud.studys}/${id}/apply`);
  };

  return (
    <StReadStudyWrap>
      <SearchHeader />
      <StReadStudyDetailImage
        src={studys.thumbnailImageURL}
        alt="섬네일 이미지"
      />

      <StReadStudyDetailHeader sort="space-between">
        <StReadStudyDetailOnline>
          {studys.address === 'online' ? '온라인' : '오프라인'}
        </StReadStudyDetailOnline>
        <StFlexBox>
          <StReadStudyDetailDueDate>
            {convertToShortDate(studys.endDate)}
          </StReadStudyDetailDueDate>
          <button
            onClick={BookmarkHandler}
            style={{ display: 'flex' }}
          >
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
        </StFlexBox>
      </StReadStudyDetailHeader>
      <StReadStudyDetailWrap>
        <StReadStudyDetailCompany>
          {studys.companyAddress}
        </StReadStudyDetailCompany>
        <StReadStudyDetailTitle>{studys.title}</StReadStudyDetailTitle>
      </StReadStudyDetailWrap>
      <StReadStudyDetailDateAndPayWrap sort="space-between">
        <StReadStudyDetailDate>
          <StReadStudyDetailDateSpan>
            {studys.address} | {convertToShortDate(studys.endDate)}일 지원 마감
          </StReadStudyDetailDateSpan>
        </StReadStudyDetailDate>
        <StReadStudyDetailPay>{studys.pay}원</StReadStudyDetailPay>
      </StReadStudyDetailDateAndPayWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>지원자 조건</StReadStudyDetailInfoTitle>
        <StParagraph>성별 : {formatGender(studys.subjectGender)}</StParagraph>
        <StParagraph>
          연령 : {formatAge(studys.subjectMinAge, studys.subjectMaxAge)}
        </StParagraph>
        {isNull(studys.benefit) ? null : (
          <StParagraph>우대사항 : {formatBenefit(studys.benefit)}</StParagraph>
        )}
      </StReadStudyDetailInfoWrap>
      <StReadStudyDetailRequireWrap>
        <StReadStudyDetailRequireTitle>연구 소개</StReadStudyDetailRequireTitle>
        <StReadStudyDetailInfoParagraph>
          {studys.studyInfo}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailRequireWrap>
      <StReadStudyDetailInfoWrap>
        <StH3>상세 설명</StH3>
        <StReadStudyDetailInfoParagraph>
          {studys.description}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      {isDefaultImage(studys.detailImageURL) ? (
        ''
      ) : (
        <StImage
          src={studys.detailImageURL}
          alt="이미지"
        />
      )}
      <div style={{ marginBottom: '16px' }}></div>
      <StFlexBox>
        <StReadStudyDetailQuestion onClick={soonDevelop}>
          문의하기
        </StReadStudyDetailQuestion>
        <StReadStudyDetailApplication onClick={applyHandler}>
          {studys.isapplied ? '지원완료' : '지원하기'}
        </StReadStudyDetailApplication>
      </StFlexBox>
    </StReadStudyWrap>
  );
}

const StH3 = styled.h3`
  ${fontOptions.subtitle};
`;

const StImage = styled.img`
  min-width: 335px;
  max-width: 335px;
`;

export default ReadStudyDetail;
