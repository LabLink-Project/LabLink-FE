import React from 'react';

function ReadStudy() {
  const mockupData = {
    id: 1,
    title: '웹 서비스 테스터 모집',
    category: 'UT',
    companyName: 'LabLink',
    companyHeat: 75,
    date: '2023-04-03 22:34',
    pay: '급여',
    region: '지역',
    bookmark: true,
  };

  return (
    <div>
      <h1>게시글 전체 조회</h1>
      <ul>
        <li>
          <article>
            <h2>제목 : {mockupData.title}</h2>
            <div>북마크 : {mockupData.bookmark ? 'star' : 'emptystar'}</div>
            <div>카테고리 : {mockupData.category}</div>
            <div>
              <h3>작성자 정보</h3>
              <p>기업명 : {mockupData.companyName}</p>
              <p>기업온도 : {mockupData.companyHeat}</p>
            </div>
            <div>급여 : {mockupData.pay}</div>
            <div>지역 : {mockupData.region}</div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default ReadStudy;
