import React from 'react';
import { StBookmark } from 'src/UI/styles/PopularStudy/Bookmark.styled';
import BookmarkOn from 'src/assets/design/Favorite_on.svg';
import BookmarkOff from 'src/assets/design/Favorite_off.svg';
import useBookmark from 'src/hooks/useBookmark';

function Bookmark({ id, isbookmarked }) {
  const [isbookmark, onClickBookmarkHandler] = useBookmark(id, isbookmarked);

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
