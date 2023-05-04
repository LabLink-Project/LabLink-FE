import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';

import {
  StPersonalRequestCompany,
  StPersonalRequestDiv,
  StPersonalRequestHeaderWrap,
  StPersonalRequestListWrap,
  StPersonalRequestPaddingWrap,
  StPersonalRequestStudyPay,
  StPersonalRequestStudyPayStrong,
  StPersonalRequestStudyTitle,
  StPersonalRequestTime,
  StPersonalRequestTitle,
  StPersonalRequestWrap,
  StapplicationViewstatus,
} from '../styles/PersonalRequest.styled';
import { api } from 'src/api/api';
import { cookies } from 'src/shared/Cookie';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';

function PersonalRequest() {
  const nav = useNavigate();
  const token = cookies.get('token');

  const [appliedStudies, setAppliedStudies] = useState();

  const getPersonalAppliedStudies = async () => {
    try {
      const { data } = await api.get('/users/applications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppliedStudies(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getPersonalAppliedStudies();
  }, []);

  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>신청한 실험</StPersonalRequestTitle>
        <StPersonalRequestDiv>최근 1주일</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        {appliedStudies?.length ? (
          <>
            {appliedStudies?.map(appliedStudy => {
              return (
                <li
                  key={appliedStudy.id}
                  onClick={() => nav(`${URI.crud.studys}/${appliedStudy.id}`)}
                >
                  <StPersonalRequestListWrap>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestCompany>
                        {appliedStudy.companyName}
                      </StPersonalRequestCompany>
                      <StPersonalRequestTime>
                        {appliedStudy.applicationDate}에 지원
                      </StPersonalRequestTime>
                    </StPersonalRequestHeaderWrap>
                    <StPersonalRequestStudyTitle>
                      {appliedStudy.title}
                    </StPersonalRequestStudyTitle>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestStudyPay>
                        <StPersonalRequestStudyPayStrong>
                          {appliedStudy.pay}
                        </StPersonalRequestStudyPayStrong>
                        원
                      </StPersonalRequestStudyPay>
                      <StapplicationViewstatus>
                        {appliedStudy.approvalStatus}
                      </StapplicationViewstatus>
                    </StPersonalRequestHeaderWrap>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestStudyPay>
                        {appliedStudy.address} | {appliedStudy.date}에 지원 마감
                      </StPersonalRequestStudyPay>
                      <StapplicationViewstatus>
                        {appliedStudy.viewStatus}
                      </StapplicationViewstatus>
                    </StPersonalRequestHeaderWrap>
                  </StPersonalRequestListWrap>
                </li>
              );
            })}
          </>
        ) : (
          <p>신청한 실험이 없습니다.</p>
        )}
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default PersonalRequest;
