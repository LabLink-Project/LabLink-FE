import React from 'react';
import search from 'src/assets/Search.svg';
import {
  StSearchBar,
  StSearchBarIcon,
  StSearchBarIconLabel,
  StSearchBarWrap,
} from '../styles/SearchBar.styled';
import { useInput } from 'src/hooks/useInput';
import { useNavigate } from 'react-router-dom';

function SearchBar({ placeholder }) {
  // handler={keywordHandler}
  // onEnterHandler={onSearchHandler}

  const [keyword, keywordHandler] = useInput('');

  const navigate = useNavigate();

  const onSearchHandler = () => {
    console.log('entered search bar : ', keyword);
    navigate('/studys', { state: { keyword } });
  };

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
        onChange={keywordHandler}
        placeholder={placeholder}
        onKeyPress={e => {
          if (e.key === 'Enter') onSearchHandler();
        }}
      />
    </StSearchBarWrap>
  );
}

export default SearchBar;
