import React from 'react';
import Layout from '../../components/Layout';
import { StTemrsUl, StTermTitle } from 'src/UI/styles/Terms.styled';

function PersonalTerms() {
  return (
    <Layout header={'개인정보 처리방침'}>
      <StTemrsUl>
        <li>
          LabLink(이하 '회사'라고 합니다)은(는) 개인정보보호법 등 관련 법령상의
          개인정보보호 규정을 준수하며 귀하의 개인정보보호에 최선을 다하고
          있습니다. 회사는 개인정보보호법에 근거하여 다음과 같은 내용으로
          개인정보를 수집 및 처리하고자 합니다. 다음의 내용을 자세히 읽어보시고
          모든 내용을 이해하신 후에 동의 여부를 결정해주시기 바랍니다.
        </li>
        <li>
          <StTermTitle>제1조(개인정보 수집 및 이용 목적)</StTermTitle>
          이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 목적 이외의
          용도로는 사용되지 않습니다. - 본인확인
        </li>
        <li>
          <StTermTitle>제2조(개인정보 수집 및 이용 항목)</StTermTitle>
          회사는 개인정보 수집 목적을 위하여 다음과 같은 정보를 수집합니다. -
          성명, 전화번호, 이메일, 성별 및 나이
        </li>
        <li>
          <StTermTitle>제3조(개인정보 보유 및 이용 기간)</StTermTitle>
          수집한 개인정보는 수집·이용 동의일로부터 개인정보 수집·이용 목적을
          달성할 때까지 보관 및 이용합니다. 개인정보 보유기간의 경과, 처리목적의
          달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
          파기합니다.
        </li>
        <li>
          <StTermTitle>제4조(개인정보의 제3자 제공)</StTermTitle>
          회사는 개인정보보호법에 근거하여 다음과 같은 내용으로 개인정보를
          제3자에게 제공하고자 합니다.
        </li>
      </StTemrsUl>
    </Layout>
  );
}

export default PersonalTerms;
