import React from 'react';
import search from 'src/assets/Search.svg';
import {
  StSearchBar,
  StSearchBarIcon,
  StSearchBarIconLabel,
  StSearchBarWrap,
} from '../styles/SearchBar.styled';

function SearchBar({ placeholder, handler }) {
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
        onChange={handler}
        placeholder={placeholder}
      />
    </StSearchBarWrap>
  );
}

export default SearchBar;
