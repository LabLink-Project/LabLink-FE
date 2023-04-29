import React, { useEffect, useState } from 'react';
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
  StReadStudyDetailRequireOptionTitle,
  StReadStudyDetailRequireOptions,
  StReadStudyDetailTr,
  StReadStudyDetailTable,
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
import { api } from 'src/api/api';
import { useParams } from 'react-router-dom';
import { convertToShortDate } from 'src/utils/formatDate';

function ReadStudyDetail() {
  // const history = () => {};

  const [data, setData] = useState({});

  const { id } = useParams();

  const onClickBookmarkHandler = () => {
    setData({ ...data, isBookmarked: !data.isBookmarked });
    bookmarkRequest();
  };

  const getStudy = async () => {
    const response = await api.get(`/studies/${id}`);
    console.log(response.data.data);
    setData({ ...response.data.data });
  };

  const bookmarkRequest = async () => {
    console.log('bookmarked');
  };

  useEffect(() => {
    getStudy();
  }, []);

  // need data
  // address, endDate, companyAddress, title, pay, isBookmarked

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

  // 추가 기능

  return (
    <StReadStudyWrap>
      <SearchHeader />
      <StReadStudyDetailImage
        src={data.thumbnailImageURL}
        alt="섬네일 이미지"
      />

      <StReadStudyDetailHeader sort="space-between">
        <StReadStudyDetailOnline>
          {data.address === 'online' ? '온라인' : '오프라인'}
        </StReadStudyDetailOnline>
        <StFlexBox>
          <StReadStudyDetailDueDate>
            {convertToShortDate(data.endDate)}
          </StReadStudyDetailDueDate>
          <button onClick={onClickBookmarkHandler}>
            {data.isBookmarked ? (
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
          {data.companyAddress}
        </StReadStudyDetailCompany>
        <StReadStudyDetailTitle>{data.title}</StReadStudyDetailTitle>
      </StReadStudyDetailWrap>
      <StReadStudyDetailDateAndPayWrap sort="space-between">
        <StReadStudyDetailDate>
          모집기간{' '}
          <StReadStudyDetailDateSpan>
            ~{convertToShortDate(data.endDate)}까지
          </StReadStudyDetailDateSpan>
        </StReadStudyDetailDate>
        <StReadStudyDetailPay>{data.pay}원</StReadStudyDetailPay>
      </StReadStudyDetailDateAndPayWrap>
      <StReadStudyDetailRequireWrap>
        <StReadStudyDetailRequireTitle>연구 소개</StReadStudyDetailRequireTitle>
        <StReadStudyDetailInfoParagraph>
          {data.studyInfo}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailRequireWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>연구 목적</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          {data.studyPurpose}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>연구 방법</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          {data.studyAction}
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StFlexBox>
        <StReadStudyDetailQuestion>문의하기</StReadStudyDetailQuestion>
        <StReadStudyDetailApplication>지원하기</StReadStudyDetailApplication>
      </StFlexBox>
    </StReadStudyWrap>
  );

  // 지원자 조건 컴포넌트 - 나중에 쓸 일 있을수도?
  //   <StReadStudyDetailRequireWrap>
  //   <StReadStudyDetailRequireTitle>
  //     지원자 조건
  //   </StReadStudyDetailRequireTitle>
  //   <StReadStudyDetailTable>
  //     <tbody>
  //       <StReadStudyDetailTr>
  //         <StReadStudyDetailRequireOptionTitle>
  //           성별
  //         </StReadStudyDetailRequireOptionTitle>
  //         <StReadStudyDetailRequireOptions>
  //           남녀불문
  //         </StReadStudyDetailRequireOptions>
  //       </StReadStudyDetailTr>
  //       <StReadStudyDetailTr>
  //         <StReadStudyDetailRequireOptionTitle>
  //           연령
  //         </StReadStudyDetailRequireOptionTitle>
  //         <StReadStudyDetailRequireOptions>
  //           19~55세
  //         </StReadStudyDetailRequireOptions>
  //       </StReadStudyDetailTr>
  //       <StReadStudyDetailTr>
  //         <StReadStudyDetailRequireOptionTitle>
  //           우대사항
  //         </StReadStudyDetailRequireOptionTitle>
  //         <StReadStudyDetailRequireOptions>
  //           집안일에 적극 관여하고 있으며 관련하여 전문가의 도움을 느꼈던
  //           적이 있으신 분 (전문가 – Ex. 가사도우미, 청소 전문 인력/업체,
  //           가전제품 전담관리사 등)
  //         </StReadStudyDetailRequireOptions>
  //       </StReadStudyDetailTr>
  //     </tbody>
  //   </StReadStudyDetailTable>
  // </StReadStudyDetailRequireWrap>
}

export default ReadStudyDetail;
