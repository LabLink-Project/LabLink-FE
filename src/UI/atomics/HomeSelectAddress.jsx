import React, { useState } from 'react';
import {
  StHomeSelectAddress,
  StHomeSelectAddressButton,
  StHomeSelectAddressWrap,
} from '../styles/HomeSelectAddress.styled';
import { useSelector } from 'react-redux';

import Option from './Home/Option';

function HomeSelectAddress() {
  const [show, setShow] = useState(false);
  const address = useSelector(state => state);
  const { studyType, detailAddress } = address.studyTypeHandler;

  const onClickShowOptionsHandler = () => {
    setShow(!show);
  };

  return (
    <>
      {/* 우선 온라인 시 해당 컴포넌트가 렌더되지 않도록 구현, 나중에 disabled 스타일 적용 */}
      {studyType !== 'offline' ? (
        <>
          <StHomeSelectAddressWrap sort="space-between">
            <StHomeSelectAddress>
              {detailAddress} {'>'} 전체
            </StHomeSelectAddress>
            <StHomeSelectAddressButton onClick={onClickShowOptionsHandler}>
              설정하기
            </StHomeSelectAddressButton>
          </StHomeSelectAddressWrap>
          {show && (
            <>
              <Option closeHandler={onClickShowOptionsHandler}>서울</Option>
              <Option closeHandler={onClickShowOptionsHandler}>인천</Option>
              <Option closeHandler={onClickShowOptionsHandler}>경기</Option>
              <Option closeHandler={onClickShowOptionsHandler}>대전</Option>
              <Option closeHandler={onClickShowOptionsHandler}>충남</Option>
              <Option closeHandler={onClickShowOptionsHandler}>충북</Option>
              <Option closeHandler={onClickShowOptionsHandler}>강원</Option>
              <Option closeHandler={onClickShowOptionsHandler}>광주</Option>
              <Option closeHandler={onClickShowOptionsHandler}>전라</Option>
              <Option closeHandler={onClickShowOptionsHandler}>부산</Option>
              <Option closeHandler={onClickShowOptionsHandler}>울산</Option>
              <Option closeHandler={onClickShowOptionsHandler}>대구</Option>
              <Option closeHandler={onClickShowOptionsHandler}>경상</Option>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomeSelectAddress;
