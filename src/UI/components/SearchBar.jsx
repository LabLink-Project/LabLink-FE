import React from 'react';
import search from 'src/assets/design/Search_off.svg';
import {
  StSearchBar,
  StSearchBarIcon,
  StSearchBarIconLabel,
  StSearchBarWrap,
} from '../styles/SearchBar.styled';
import { useInput } from 'src/hooks/useInput';
import { useNavigate } from 'react-router-dom';

function SearchBar({ placeholder }) {
  const [keyword, keywordHandler] = useInput('');

  const navigate = useNavigate();

  const onSearchHandler = () => {
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
        placeholder={placeholder ? placeholder : '검색어를 입력해 주세요'}
        onKeyPress={e => {
          if (e.key === 'Enter') onSearchHandler();
        }}
      />
    </StSearchBarWrap>
  );
}

export default SearchBar;
