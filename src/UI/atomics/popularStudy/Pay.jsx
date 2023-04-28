import React from 'react';
import { StPay, StPayWrap } from 'src/UI/styles/PopularStudy/Pay.styled';

function Pay({ children }) {
  return (
    <StPayWrap>
      <StPay>{children}</StPay>원
    </StPayWrap>
  );
}

export default Pay;
