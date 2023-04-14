import React from 'react';
import {
  StSearchHistoryUICloseIcon,
  StSearchHistoryUISpan,
  StSearchHistoryUI,
} from 'src/UI/styles/SearchHistoryUI.styled';
import close from 'src/assets/Close.svg';

function SearchHistoryUI({ children }) {
  return (
    <StSearchHistoryUI>
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
