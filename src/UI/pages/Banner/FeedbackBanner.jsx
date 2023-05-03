import React from 'react';
import SearchHeader from 'src/UI/components/SearchHeader';
import feedbackPage from 'src/assets/design/bannerPage/eventPage.jpeg';

function FeedbackBanner() {
  return (
    <>
      <div style={{ padding: '0 20px' }}>
        <SearchHeader title="Lablink 파헤치기" />
      </div>
      <img
        src={feedbackPage}
        alt="피드백 이벤트 이미지"
      />
    </>
  );
}

export default FeedbackBanner;
