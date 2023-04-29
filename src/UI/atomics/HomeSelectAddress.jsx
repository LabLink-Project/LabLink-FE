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
  const { studyType, detailAddress } = useReduxState();

  return (
    <>
      {/* 우선 온라인 시 해당 컴포넌트가 렌더되지 않도록 구현, 나중에 disabled 스타일 적용 */}
      {studyType !== 'offline' ? (
        <>
          <StHomeSelectAddressWrap sort="space-between">
            <StHomeSelectAddress>
              {detailAddress} {'>'} 전체
            </StHomeSelectAddress>
            <StHomeSelectAddressButton onClick={isShowHandler}>
              설정하기
            </StHomeSelectAddressButton>
          </StHomeSelectAddressWrap>
          {show && (
            <>
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
