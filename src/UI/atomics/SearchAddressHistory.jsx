import React from 'react';
import close from 'src/assets/Close.svg';
import {
  StDetailSearchAddressHistory,
  StDetailSearchAddressHistoryCloseIcon,
} from '../styles/SearchAddressHistory.styled';

function SearchAddressHistory({ content }) {
  return (
    <StDetailSearchAddressHistory>
      <span>{content}</span>
      <button>
        <StDetailSearchAddressHistoryCloseIcon
          src={close}
          alt="삭제 아이콘"
        />
      </button>
    </StDetailSearchAddressHistory>
  );
}

export default SearchAddressHistory;
