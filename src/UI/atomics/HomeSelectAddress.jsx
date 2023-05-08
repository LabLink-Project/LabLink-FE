import React from 'react';
import {
  StHomeSelectAddress,
  StHomeSelectAddressButton,
  StHomeSelectAddressWrap,
} from '../styles/HomeSelectAddress.styled';

import Option from './Home/Option';
import useBoolean from 'src/hooks/useBoolean';
import useReduxState from 'src/hooks/useReduxState';
import styled from 'styled-components';
import { StFlexBox } from '../styles/common.styled';

function HomeSelectAddress() {
  const [show, isShowHandler] = useBoolean();
  const detailAddress = useReduxState('detailAddress');

  return (
    <>
      <StHomeSelectAddressWrap sort="space-between">
        <StHomeSelectAddress>
          {detailAddress === '전체' ? '지역 전체' : `${detailAddress} > 전체`}
        </StHomeSelectAddress>
        <StHomeSelectAddressButton onClick={isShowHandler}>
          변경하기
        </StHomeSelectAddressButton>
      </StHomeSelectAddressWrap>
      {show && (
        <StOptionsWrap>
          <Option closeHandler={isShowHandler}>전체</Option>
          <Option closeHandler={isShowHandler}>서울</Option>
          <Option closeHandler={isShowHandler}>인천</Option>
          <Option closeHandler={isShowHandler}>경기</Option>
          <Option closeHandler={isShowHandler}>대전</Option>
          <Option closeHandler={isShowHandler}>충남</Option>
          <Option closeHandler={isShowHandler}>충북</Option>
          <Option closeHandler={isShowHandler}>강원</Option>
          <Option closeHandler={isShowHandler}>광주</Option>
          <Option closeHandler={isShowHandler}>전라</Option>
          <Option closeHandler={isShowHandler}>부산</Option>
          <Option closeHandler={isShowHandler}>울산</Option>
          <Option closeHandler={isShowHandler}>대구</Option>
          <Option closeHandler={isShowHandler}>경상</Option>
        </StOptionsWrap>
      )}
    </>
  );
}

const StOptionsWrap = styled(StFlexBox)`
  flex-wrap: wrap;

  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  gap: 6px;
`;

export default HomeSelectAddress;
