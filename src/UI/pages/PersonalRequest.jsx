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
import FooterNav from '../components/FooterNav';

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

  const viewStatus = appliedStudy => {
    if (appliedStudy.viewStatus === 'VIEWED') {
      return (appliedStudy.viewStatus = '열람');
    } else {
      return (appliedStudy.viewStatus = '미열람');
    }
  };

  const approvalStatus = appliedStudy => {
    if (appliedStudy.approvalStatus === 'approvalStatus') {
      return (appliedStudy.approvalStatus = '승인');
    } else if (appliedStudy.approvalStatus === 'REJECTED') {
      return (appliedStudy.approvalStatus = '미승인');
    } else {
      return (appliedStudy.approvalStatus = '처리중');
    }
  };
console.log(appliedStudies);
  return (
    <>
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
                  <li key={appliedStudy.id}>
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
                        <button
                          onClick={() =>
                            nav(`${URI.crud.studys}/${appliedStudy.id}`)
                          }
                        >
                          {appliedStudy.title}
                          <span
                            style={{
                              fontSize: '5px',
                              marginLeft: '5px',
                              color: 'gray',
                            }}
                          >
                            (상세보기)
                          </span>
                        </button>
                      </StPersonalRequestStudyTitle>
                      <StPersonalRequestHeaderWrap sort="space-between">
                        <StPersonalRequestStudyPay>
                          <StPersonalRequestStudyPayStrong>
                            {appliedStudy.pay}
                          </StPersonalRequestStudyPayStrong>
                          원
                        </StPersonalRequestStudyPay>
                        <StapplicationViewstatus>
                          {approvalStatus(appliedStudy)}
                        </StapplicationViewstatus>
                      </StPersonalRequestHeaderWrap>
                      <StPersonalRequestHeaderWrap sort="space-between">
                        <StPersonalRequestStudyPay>
                          {appliedStudy.address} <br /> {appliedStudy.date}에
                          지원 마감
                        </StPersonalRequestStudyPay>
                        <StapplicationViewstatus>
                          {viewStatus(appliedStudy)}
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
      <FooterNav />
    </>
  );
}

export default PersonalRequest;
