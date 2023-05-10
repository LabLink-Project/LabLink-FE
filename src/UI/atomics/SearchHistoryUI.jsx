import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  StSearchHistoryUISpan,
  StSearchHistoryUI,
} from 'src/UI/styles/SearchHistoryUI.styled';

function SearchHistoryUI({ children }) {
  const navigate = useNavigate();

  const onSearchHandler = () => {
    console.log('entered search bar : ', children);
    navigate('/studys', { state: { keyword: children } });
  };

  return (
    <StSearchHistoryUI onClick={onSearchHandler}>
      <StSearchHistoryUISpan>{children}</StSearchHistoryUISpan>
    </StSearchHistoryUI>
  );
}

export default SearchHistoryUI;
