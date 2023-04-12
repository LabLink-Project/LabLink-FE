import React from 'react';

function ReadStudyDetail() {
  const mockupData = {
    title: '테스터 모집',
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
    companyAddress: '어디어디',
    businessCategory: '사업내용',
    bookmark: true,
  };

  return (
    <div>
      <h1>게시글 상세 조회 리스트</h1>
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
            {/* options 어떻게 처리할까? */}
            <div>모집인원 : {mockupData.subjectCount}</div>
            <div>카테고리 : {mockupData.category}</div>
            <div>실험 시작일 : {mockupData.date}</div>
            <div>실험 종료일 : {mockupData.endDate}</div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default ReadStudyDetail;
