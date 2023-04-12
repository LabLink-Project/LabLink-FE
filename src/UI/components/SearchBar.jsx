import React, { useState } from 'react';
import search from 'src/assets/Search.svg';
import {
  StSearchBar,
  StSearchBarIcon,
  StSearchBarIconLabel,
  StSearchBarWrap,
} from '../styles/SearchBar.styled';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  return (
    <StSearchBarWrap>
      <StSearchBarIconLabel htmlFor="search">
        <StSearchBarIcon
          src={search}
          alt="검색 아이콘"
        />
      </StSearchBarIconLabel>
      <StSearchBar
        type="text"
        id="search"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
    </StSearchBarWrap>
  );
}

export default SearchBar;
