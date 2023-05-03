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
} from '../styles/PersonalRequest.styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { cookies } from 'src/shared/Cookie';
import { api } from 'src/api/api';

function CompanyOngoingStudy() {
  const nav = useNavigate();
  const token = cookies.get('token');

  const [ongoingStudies, setOngoingStudies] = useState();

  const getOngoingStudies = async () => {
    try {
      const { data } = await api.get('/companies/studies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOngoingStudies(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  const ongoingStudy = ongoingStudies?.filter(
    ongoingStudy => ongoingStudy.studyStatus === 'ONGOING'
  );

  useEffect(() => {
    getOngoingStudies();
  }, []);

  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>진행중인 공고</StPersonalRequestTitle>
        <StPersonalRequestDiv>전체보기</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        {ongoingStudy?.length ? (
          <>
            {ongoingStudy.map(ongoingStudy => {
              return (
                <li key={ongoingStudy.id}>
                  <StPersonalRequestListWrap>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestCompany></StPersonalRequestCompany>
                      <StPersonalRequestTime>
                        현재 {ongoingStudy.subjectCount}명 지원
                      </StPersonalRequestTime>
                    </StPersonalRequestHeaderWrap>
                    <StPersonalRequestStudyTitle>
                      {ongoingStudy.title}
                    </StPersonalRequestStudyTitle>
                    <StPersonalRequestStudyPay>
                      <StPersonalRequestStudyPayStrong>
                        {ongoingStudy.pay}
                      </StPersonalRequestStudyPayStrong>
                      원
                    </StPersonalRequestStudyPay>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestStudyPay>
                        {ongoingStudy.address} | {ongoingStudy.date}에 진행
                      </StPersonalRequestStudyPay>
                      <Button
                        variant="dark"
                        style={{
                          height: '100%',
                          fontSize: '15px',
                        }}
                        onClick={() =>
                          nav(
                            `${URI.mypage.company.applicant}/${ongoingStudy.id}`
                          )
                        }
                      >
                        지원자 확인
                      </Button>
                    </StPersonalRequestHeaderWrap>
                  </StPersonalRequestListWrap>
                </li>
              );
            })}
          </>
        ) : (
          <p>진행중인 공고가 없습니다.</p>
        )}
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default CompanyOngoingStudy;
