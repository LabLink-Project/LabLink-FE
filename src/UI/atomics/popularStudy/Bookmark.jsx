import React, { useState } from 'react';
import { StBookmark } from 'src/UI/styles/PopularStudy/Bookmark.styled';
import BookmarkOn from 'src/assets/design/Favorite_on.svg';
import BookmarkOff from 'src/assets/design/Favorite_off.svg';
import { apiWithJWT } from 'src/api/api';

function Bookmark({ id, isbookmarked }) {
  const [isbookmark, setIsBookmark] = useState(isbookmarked);

  const onClickBookmarkHandler = () => {
    setIsBookmark(!isbookmark);
    bookmarkRequest();
  };

  const bookmarkRequest = async () => {
    const response = await apiWithJWT.post(`/studies/${id}/bookmark`);
    console.log(response.data);
  };

  return (
    <StBookmark onClick={onClickBookmarkHandler}>
      {isbookmark ? (
        <img
          src={BookmarkOn}
          alt="즐겨찾기 활성화"
        />
      ) : (
        <img
          src={BookmarkOff}
          alt="즐겨찾기 비활성화"
        />
      )}
    </StBookmark>
  );
}

export default Bookmark;
