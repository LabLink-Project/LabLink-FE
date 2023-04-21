import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StBookmarkListButton,
  StBookmarkListButtonWrap,
  StBookmarkListTitle,
  StBookmarkListWrap,
  StBookmarkTitles,
} from '../styles/BookmarkList.styled';
import Study from '../components/Study';
import { apiWithJWT } from 'src/api/api';
import FooterNav from '../components/FooterNav';

function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);

  const getBookmarkList = async () => {
    const response = await apiWithJWT.get('/bookmark?category=online');
    console.log('data : ', response.data.data);
    setBookmarks([...response.data.data]);
  };

  useEffect(() => {
    getBookmarkList();
  }, []);

  return (
    <StBookmarkListWrap>
      <SearchHeader title="찜 목록" />
      <StBookmarkListButtonWrap>
        <StBookmarkListButton>온라인</StBookmarkListButton>
        <StBookmarkListButton>오프라인</StBookmarkListButton>
      </StBookmarkListButtonWrap>
      <div>
        <StBookmarkTitles sort="space-between">
          <StBookmarkListTitle>내가 찜한 공고</StBookmarkListTitle>
          <div>최근 1주일</div>
        </StBookmarkTitles>
        {bookmarks?.map(obj => {
          obj['isbookmarked'] = true;
          return (
            <Study
              obj={obj}
              key={obj.id}
            />
          );
        })}
      </div>
      <FooterNav />
    </StBookmarkListWrap>
  );
}

export default BookmarkList;
