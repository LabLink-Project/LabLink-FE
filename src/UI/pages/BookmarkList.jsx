import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StBookmarkListButton,
  StBookmarkListButtonWrap,
  StBookmarkListTitle,
  StBookmarkTitles,
} from '../styles/BookmarkList.styled';
import Study from '../components/Study';
import FooterNav from '../components/FooterNav';
import { useNavigate } from 'react-router-dom';
import { isSignIn } from 'src/hooks/useCheckToken';
import useStudys from 'src/hooks/useStudys';
import { StMarginWrap } from '../styles/SharedStyle/MarginWrap.styled';

function BookmarkList() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn()) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/auth/signin/user');
    }
  }, []);

  const [category, setCategory] = useState('ONLINE');
  const onlineClickHandler = () => {
    setCategory('ONLINE');
  };
  const offlineClickHandler = () => {
    setCategory('OFFLINE');
  };

  const [bookmarks] = useStudys(`/bookmark`);

  // 이 페이지에선 북마크 취소 시 화면에 반영되어야 함
  return (
    <div>
      <SearchHeader title="찜 목록" />
      <StBookmarkListButtonWrap>
        <StBookmarkListButton
          onClick={onlineClickHandler}
          current={category === 'ONLINE' ? true : false}
        >
          온라인
        </StBookmarkListButton>
        <StBookmarkListButton
          onClick={offlineClickHandler}
          current={category === 'OFFLINE' ? true : false}
        >
          오프라인
        </StBookmarkListButton>
      </StBookmarkListButtonWrap>
      <StMarginWrap>
        <StBookmarkTitles sort="space-between">
          <StBookmarkListTitle>내가 찜한 공고</StBookmarkListTitle>
        </StBookmarkTitles>
        {bookmarks.length
          ? bookmarks
              .filter(obj => obj.category === category)
              .map(obj => {
                return (
                  <Study
                    obj={obj}
                    key={obj.id}
                  />
                );
              })
          : '내가 찜한 공고가 아직 없습니다 😥'}
        {}
      </StMarginWrap>
      <FooterNav />
    </div>
  );
}

export default BookmarkList;
