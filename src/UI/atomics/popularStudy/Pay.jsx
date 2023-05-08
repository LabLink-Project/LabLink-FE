import React from 'react';
import { StPay, StPayWrap } from 'src/UI/styles/PopularStudy/Pay.styled';
import { formatPay } from 'src/utils/formatPay';

function Pay({ children }) {
  return (
    <StPayWrap>
      <StPay>{formatPay(children)}</StPay>원
    </StPayWrap>
  );
}

export default Pay;
