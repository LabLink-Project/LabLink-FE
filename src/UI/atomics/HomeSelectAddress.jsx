import React from 'react';
import {
  StHomeSelectAddress,
  StHomeSelectAddressButton,
  StHomeSelectAddressWrap,
} from '../styles/HomeSelectAddress.styled';
import { useSelector } from 'react-redux';

function HomeSelectAddress() {
  const address = useSelector(state => state);
  const { studyType } = address.studyTypeHandler;

  return (
    <>
      {studyType !== 'online' ? (
        <StHomeSelectAddressWrap sort="space-between">
          <StHomeSelectAddress>서울 {'>'} 전체</StHomeSelectAddress>
          <StHomeSelectAddressButton>설정하기</StHomeSelectAddressButton>
        </StHomeSelectAddressWrap>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomeSelectAddress;
