import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  StSearchHistoryUICloseIcon,
  StSearchHistoryUISpan,
  StSearchHistoryUI,
} from 'src/UI/styles/SearchHistoryUI.styled';
import close from 'src/assets/Close.svg';

function SearchHistoryUI({ children }) {
  const navigate = useNavigate();

  const onSearchHandler = () => {
    console.log('entered search bar : ', children);
    navigate('/studys', { state: { keyword: children } });
  };

  return (
    <StSearchHistoryUI onClick={onSearchHandler}>
      <StSearchHistoryUISpan>{children}</StSearchHistoryUISpan>
      <button>
        <StSearchHistoryUICloseIcon
          src={close}
          alt="close button"
        />
      </button>
    </StSearchHistoryUI>
  );
}

export default SearchHistoryUI;
