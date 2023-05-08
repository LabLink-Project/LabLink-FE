import React from 'react';
import SearchHeader from 'src/UI/components/SearchHeader';
import tutorialPage from 'src/assets/design/home/bannerPage/tutorialPage.jpeg';

function TutorialBanner() {
  return (
    <>
      <div style={{ padding: '0 20px' }}>
        <SearchHeader title="Lablink 파헤치기" />
      </div>
      <img
        src={tutorialPage}
        alt="튜토리얼 이미지"
      />
    </>
  );
}

export default TutorialBanner;
