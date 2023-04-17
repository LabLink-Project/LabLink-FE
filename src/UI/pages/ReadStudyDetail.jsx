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

function ReadStudyDetail() {
  const mockupData = {
    title: '홈 서비스 플랫폼 개발을 위한 사용자 조사 대상자 모집',
    studyInfo: '연구소개입니다',
    studyPurpose: '연구목적입니다',
    studyAction: '연구진행방법입니다',
    subjectCount: '32',
    category: '연구실 실험',
    date: '2023-04-03 22:34',
    region: '서울',
    address: '서울시 강남구 역삼동 123-45',
    pay: '20000원',
    gender: '남자',
    age: '20이상 30이하',
    repeatCount: '32',
    endDate: '2023-04-04 22:34',
    imageURL: 'some url',
    companyName: '기업명',
    companyHeat: 75,
    createdAt: '등록일',
    modifiedAt: '수정일',
    managerPhone: '010-1234-5678',
    ownerName: 'ㅇㅇㅇ',
    companyAddress: '(주)항해99',
    businessCategory: '사업내용',
    isBookmarked: true,
  };

  return (
    <StReadStudyWrap>
      <SearchHeader />
      <StReadStudyDetailImage
        src="#"
        alt="섬네일 이미지"
      />

      <StReadStudyDetailHeader sort="space-between">
        <StReadStudyDetailOnline>
          {mockupData.address === 'online' ? '온라인' : '오프라인'}
        </StReadStudyDetailOnline>
        <StFlexBox>
          <StReadStudyDetailDueDate>D-3</StReadStudyDetailDueDate>
          {mockupData.isBookmarked ? (
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
        </StFlexBox>
      </StReadStudyDetailHeader>
      <StReadStudyDetailWrap>
        <StReadStudyDetailCompany>
          {mockupData.companyAddress}
        </StReadStudyDetailCompany>
        <StReadStudyDetailTitle>{mockupData.title}</StReadStudyDetailTitle>
      </StReadStudyDetailWrap>
      <StReadStudyDetailDateAndPayWrap sort="space-between">
        <StReadStudyDetailDate>
          모집기간{' '}
          <StReadStudyDetailDateSpan>~04/12까지</StReadStudyDetailDateSpan>
        </StReadStudyDetailDate>
        <StReadStudyDetailPay>50000원</StReadStudyDetailPay>
      </StReadStudyDetailDateAndPayWrap>
      <StReadStudyDetailRequireWrap>
        <StReadStudyDetailRequireTitle>
          지원자 조건
        </StReadStudyDetailRequireTitle>
        <StReadStudyDetailTable>
          <tbody>
            <StReadStudyDetailTr>
              <StReadStudyDetailRequireOptionTitle>
                성별
              </StReadStudyDetailRequireOptionTitle>
              <StReadStudyDetailRequireOptions>
                남녀불문
              </StReadStudyDetailRequireOptions>
            </StReadStudyDetailTr>
            <StReadStudyDetailTr>
              <StReadStudyDetailRequireOptionTitle>
                연령
              </StReadStudyDetailRequireOptionTitle>
              <StReadStudyDetailRequireOptions>
                19~55세
              </StReadStudyDetailRequireOptions>
            </StReadStudyDetailTr>
            <StReadStudyDetailTr>
              <StReadStudyDetailRequireOptionTitle>
                우대사항
              </StReadStudyDetailRequireOptionTitle>
              <StReadStudyDetailRequireOptions>
                집안일에 적극 관여하고 있으며 관련하여 전문가의 도움을 느꼈던
                적이 있으신 분 (전문가 – Ex. 가사도우미, 청소 전문 인력/업체,
                가전제품 전담관리사 등)
              </StReadStudyDetailRequireOptions>
            </StReadStudyDetailTr>
          </tbody>
        </StReadStudyDetailTable>
      </StReadStudyDetailRequireWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>연구 소개</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          안녕하세요 항해99 UX컨설팅그룹 김항해 선임연구원입니다.홈 서비스
          플랫폼 개발을 위하여 사용자의 경험과 의견을 듣고자 사용자 조사를
          진행합니다.설문 응답에 약 3분 정도 소요되며, 본 설문에서 수집되는 모든
          정보는 사용자 조사 대상자 선별 및 사용 경험을 파악하는 자료로만 활용
          되고 이를 제외한 다른 곳에는 절대 활용되지 않습니다.
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StReadStudyDetailInfoWrap>
        <StReadStudyDetailInfoTitle>상세 설명</StReadStudyDetailInfoTitle>
        <StReadStudyDetailInfoParagraph>
          아래 URL을 통해 설문조사에 참여해주시면 대상자를 선별하여 개별적으로
          연락 드릴 예정입니다.설문 응답에 약 3분 정도 소요됩니다.
          https://forms.gle/2KiboYWcjHmqfiY27 1. 설문조사 응답자 중 대상자 선별
          후 개별 연락 2. 사용자 조사 진행 (약 1시간~1시간 30분 소요 예정) 기타
          자세한 내용은 보안상 대상자에 한하여 공개하는 점 양해 부탁 드립니다.
        </StReadStudyDetailInfoParagraph>
      </StReadStudyDetailInfoWrap>
      <StFlexBox>
        <StReadStudyDetailQuestion>문의하기</StReadStudyDetailQuestion>
        <StReadStudyDetailApplication>지원하기</StReadStudyDetailApplication>
      </StFlexBox>

      {/* <h1>게시글 상세 조회 리스트</h1>
      <ul>
        <li>
          <article>
            <h2>{mockupData.title}</h2>
            <div>
              <h3>연구 소개</h3>
              <p>{mockupData.studyInfo}</p>
            </div>
            <div>
              <h3>연구 목적</h3>
              <p>{mockupData.studyPurpose}</p>
            </div>
            <div>
              <h3>연구 진행 방법</h3>
              <p>{mockupData.studyAction}</p>
            </div>
            <div>모집인원 : {mockupData.subjectCount}</div>
            <div>카테고리 : {mockupData.category}</div>
            <div>실험 시작일 : {mockupData.date}</div>
            <div>실험 종료일 : {mockupData.endDate}</div>
          </article>
        </li>
      </ul> */}
    </StReadStudyWrap>
  );
}

export default ReadStudyDetail;
