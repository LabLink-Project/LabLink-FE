import React from 'react';
import {
  StHomeSelectAddress,
  StHomeSelectAddressButton,
  StHomeSelectAddressWrap,
} from '../styles/HomeSelectAddress.styled';

function HomeSelectAddress() {
  return (
    <StHomeSelectAddressWrap sort="space-between">
      <StHomeSelectAddress>서울 {'>'} 전체</StHomeSelectAddress>
      <StHomeSelectAddressButton>설정하기</StHomeSelectAddressButton>
    </StHomeSelectAddressWrap>
  );
}

export default HomeSelectAddress;
