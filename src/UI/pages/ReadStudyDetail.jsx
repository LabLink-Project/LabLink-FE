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

function ReadStudyDetail() {
  const { id } = useParams();
  const [studys] = useStudy(`/studies/${id}`);
  const [isbookmark, BookmarkHandler] = useBookmark(studys.isbookmark);

  const navigate = useNavigate();
  const applyHandler = () => {
    navigate(`${URI.crud.studys}/${id}/apply`);
  };

  // object data
  /*
    "id": 1,
    "title": "test1",
    "studyInfo": "연구 소개",
    "studyPurpose": "연구 목적",
    "studyAction": "실험 진행 방법",
    "subjectCount": 32,
    "category": "OFFLINE",
    "date": "2023-03-12 22:34",
    "address": "부산",
    "pay": 10000,
    "subjectGender": "남",
    "subjectMinAge": 14,
    "subjectMaxAge": 100,
    "repearCount": 0,
    "endDate": "2023-04-13 22:34",
    "imageURL": "https://cdn.icon-icons.com/icons2/931/PNG/512/empty_file_icon-icons.com_72420.png",
    "isbookmarked": false,
    "currentApplicantCount": 5
 */

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
          모집기간{' '}
          <StReadStudyDetailDateSpan>
            ~{convertToShortDate(studys.endDate)}까지
          </StReadStudyDetailDateSpan>
        </StReadStudyDetailDate>
        <StReadStudyDetailPay>{studys.pay}원</StReadStudyDetailPay>
      </StReadStudyDetailDateAndPayWrap>
      <StReadStudyDetailRequireWrap>
        <StReadStudyDetailRequireTitle>연구 소개</StReadStudyDetailRequireTitle>
        <StReadStudyDetailInfoParagraph>
          {studys.studyInfo}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailRequireWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>연구 목적</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          {studys.studyPurpose}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>연구 방법</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          {studys.studyAction}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StReadStudyDetailInfoWrap>
        <StH3>상세 설명</StH3>
        <StReadStudyDetailInfoParagraph>
          상세 설명은 아래 이미지 참고 부탁드립니다.
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StImage
        src={studys.detailImageURL}
        alt="이미지"
      />
      <StFlexBox>
        <StReadStudyDetailQuestion onClick={soonDevelop}>
          문의하기
        </StReadStudyDetailQuestion>
        <StReadStudyDetailApplication onClick={applyHandler}>
          지원하기
        </StReadStudyDetailApplication>
      </StFlexBox>
    </StReadStudyWrap>
  );
}

const StH3 = styled.h3`
  ${fontOptions.subtitle};
`;

const StImage = styled.img`
  max-width: 335px;
`;

export default ReadStudyDetail;
