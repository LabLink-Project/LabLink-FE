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
import { cookies } from 'src/shared/Cookie';
import { api } from 'src/api/api';
import FooterNav from '../components/FooterNav';

function PersonalOngoingStudy() {
  const token = cookies.get('token');

  const [ongoingStudies, setOngoingStudies] = useState();

  const getPersonalOngoingStudies = async () => {
    try {
      const { data } = await api.get('/users/applications', {
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
    ongoingStudy => ongoingStudy.approvalStatus === 'APPROVED'
  );
  console.log(ongoingStudy);
  useEffect(() => {
    getPersonalOngoingStudies();
  }, []);

  return (
    <>
      <StPersonalRequestPaddingWrap>
        <SearchHeader title="실험 관리" />
        <StPersonalRequestWrap sort="space-between">
          <StPersonalRequestTitle>진행할 실험</StPersonalRequestTitle>
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
                        <StPersonalRequestCompany>
                          {ongoingStudy.companyName}
                        </StPersonalRequestCompany>
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
                        {/* <Button
                          variant="dark"
                          style={{
                            height: '100%',
                            fontSize: '15px',
                          }}
                        >
                          지도보기
                        </Button> */}
                      </StPersonalRequestHeaderWrap>
                    </StPersonalRequestListWrap>
                  </li>
                );
              })}
            </>
          ) : (
            <p>진행할 실험이 없습니다.</p>
          )}
        </ul>
      </StPersonalRequestPaddingWrap>
      <FooterNav />
    </>
  );
}

export default PersonalOngoingStudy;
