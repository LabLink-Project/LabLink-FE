import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import { StCheckbox, StFlexBox } from '../styles/common.styled';
import {
  StCompanyApplicantCheckboxWrap,
  StCompanyApplicantCount,
  StCompanyApplicantDiv,
  StCompanyApplicantFlexWrap,
  StCompanyApplicantList,
  StCompanyApplicantListAddress,
  StCompanyApplicantListGender,
  StCompanyApplicantListName,
  StCompanyApplicantListPhoneNumber,
  StCompanyApplicantListWrap,
  StCompanyApplicantPay,
  StCompanyApplicantSpan,
  StCompanyApplicantStudyTitle,
  StCompanyApplicantStudyWrap,
  StCompanyApplicantWrap,
  StCompanyApplicationPayStrong,
} from '../styles/CompanyApplicant.styled';
import { api } from 'src/api/api';
import { useParams } from 'react-router-dom';
import { cookies } from 'src/shared/Cookie';

function CompanyApplicant() {
  const param = useParams();
  const token = cookies.get('token');

  const [applications, sestApplications] = useState();

  const getApplicant = async () => {
    try {
      const { data } = await api.get(`/studies/${param.id}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      sestApplications(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getApplicant();
  }, []);
  return (
    <StCompanyApplicantWrap>
      <SearchHeader title="지원자 확인" />
      <StCompanyApplicantCheckboxWrap>
        <StCheckbox />
        <StCompanyApplicantSpan>이미 확인한 지원자 제외</StCompanyApplicantSpan>
      </StCompanyApplicantCheckboxWrap>
      <StCompanyApplicantStudyWrap>
        <StCompanyApplicantFlexWrap sort="space-between">
          <StCompanyApplicantStudyTitle>
            APP 사용성테스트 지원자 모집
          </StCompanyApplicantStudyTitle>
          <div>
            <StCompanyApplicantDiv>2시간 전 등록</StCompanyApplicantDiv>
            <StCompanyApplicantCount>8명 지원</StCompanyApplicantCount>
          </div>
        </StCompanyApplicantFlexWrap>
        <StFlexBox sort="space-between">
          <StCompanyApplicantPay>
            <StCompanyApplicationPayStrong>
              30,000
            </StCompanyApplicationPayStrong>
            원
          </StCompanyApplicantPay>
          <StCompanyApplicantPay>온라인 | 4월 12일 마감</StCompanyApplicantPay>
        </StFlexBox>
      </StCompanyApplicantStudyWrap>
      <ul>
        <li>
          <StCompanyApplicantList>
            <StCompanyApplicantListWrap>
              <StCompanyApplicantListName>김항해 </StCompanyApplicantListName>
              <StCompanyApplicantListGender>
                2000.10.23 | 남성
              </StCompanyApplicantListGender>
            </StCompanyApplicantListWrap>
            <StCompanyApplicantListPhoneNumber>
              010-9999-8888
            </StCompanyApplicantListPhoneNumber>
            <StCompanyApplicantListAddress>
              서울시 관악구 남현동 1026-34 402호
            </StCompanyApplicantListAddress>
          </StCompanyApplicantList>
        </li>
      </ul>
    </StCompanyApplicantWrap>
  );
}

export default CompanyApplicant;
