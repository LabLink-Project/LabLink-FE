import React from 'react';
import Layout from '../../components/Layout';
import { StTemrsUl, StTermTitle } from 'src/UI/styles/Terms.styled';

function MarketingTerms() {
  return (
    <Layout header={'마케팅 수신 동의'}>
      <StTemrsUl>
        <li>
          마케팅 정보 수신 여부 및 마케팅을 위한 개인정보 수집이용을 거부하실 수
          있으며, 거부 시에도 LabLink 서비스를 이용하실 수 있으나, 동의를 거부한
          경우 각종 소식 및 이벤트 참여에 제한이 있을 수 있습니다.
        </li>
        <li>
          <StTermTitle> 개인정보 수집 항목</StTermTitle>
          이름, 휴대폰번호, 이메일, 주소
        </li>
        <li>
          <StTermTitle>개인정보 수집 이용 목적</StTermTitle>
          이벤트 운영 및 광고성 정보 전송, 서비스 관련 정보 전송
        </li>
        <li>
          <StTermTitle>보유 및 이용기간</StTermTitle>
          이용자가 동의를 철회하거나, 탈퇴시까지 보유•이용
        </li>
      </StTemrsUl>
    </Layout>
  );
}

export default MarketingTerms;
