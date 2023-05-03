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
import { URI } from 'src/shared/URIs';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { cookies } from 'src/shared/Cookie';
import { api } from 'src/api/api';

function PersonalEndStudy() {
  const nav = useNavigate();

  const token = cookies.get('token');

  const [endStudies, setEndStudies] = useState();

  const getPersonalEndStudies = async () => {
    try {
      const { data } = await api.get('/users/applications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEndStudies(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const today = year + '-' + month + '-' + day;
    return today;
  };

  const endStudy = endStudies
    ?.filter(endStudy => endStudy.approvalStatus === 'APPROVED')
    .filter(endStudy => endStudy.date < getToday());

  const endFeedbackDate = endStudy?.map(endStudy => {
    const endStudyDate = new Date(endStudy.date);
    endStudyDate.setDate(endStudyDate.getDate() + 3);
    const endFeedback = endStudyDate.toISOString().slice(0, 10);
    return endFeedback;
  });

  useEffect(() => {
    getPersonalEndStudies();
  }, []);

  return (
    <StPersonalRequestPaddingWrap>
      <SearchHeader title="실험 관리" />
      <StPersonalRequestWrap sort="space-between">
        <StPersonalRequestTitle>완료한 실험</StPersonalRequestTitle>
        <StPersonalRequestDiv>최근 1개월</StPersonalRequestDiv>
      </StPersonalRequestWrap>
      <ul>
        {endStudy?.length ? (
          <>
            {endStudy.map(endStudy => {
              return (
                <li key={endStudy.id}>
                  <StPersonalRequestListWrap>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestCompany>
                        {endStudy.companyName}
                      </StPersonalRequestCompany>
                      <StPersonalRequestTime>
                        {endFeedbackDate}일 까지 피드백 작성 가능
                      </StPersonalRequestTime>
                    </StPersonalRequestHeaderWrap>
                    <StPersonalRequestStudyTitle>
                      {endStudy.title}
                    </StPersonalRequestStudyTitle>
                    <StPersonalRequestStudyPay>
                      <StPersonalRequestStudyPayStrong>
                        {endStudy.pay}
                      </StPersonalRequestStudyPayStrong>
                      원
                    </StPersonalRequestStudyPay>
                    <StPersonalRequestHeaderWrap sort="space-between">
                      <StPersonalRequestStudyPay>
                        {endStudy.address} | {endStudy.date} 완료
                      </StPersonalRequestStudyPay>
                      <Button
                        variant="dark"
                        style={{
                          height: '100%',
                          fontSize: '15px',
                        }}
                        onClick={() =>
                          nav(`${URI.mypage.user.feedback}/${endStudy.id}`)
                        }
                      >
                        피드백 작성
                      </Button>
                    </StPersonalRequestHeaderWrap>
                  </StPersonalRequestListWrap>
                </li>
              );
            })}
          </>
        ) : (
          <p>완료한 실험이 없습니다.</p>
        )}
      </ul>
    </StPersonalRequestPaddingWrap>
  );
}

export default PersonalEndStudy;
