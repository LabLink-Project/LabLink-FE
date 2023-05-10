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
  StCompanyApplicantListButtons,
  StCompanyApplicantListGender,
  StCompanyApplicantListMessage,
  StCompanyApplicantListMessageBody,
  StCompanyApplicantListMessageTitle,
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
import useStudy from 'src/hooks/useStudy';
import { convertToShortDate } from 'src/utils/formatDate';
import { Button } from 'react-bootstrap';

function StudyApplicant() {
  const param = useParams();
  const token = cookies.get('token');

  const [applicants, setApplicants] = useState();

  const getApplicant = async () => {
    try {
      const { data } = await api.get(`/studies/${param.id}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setApplicants(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getApplicant();
  }, []);

  const [study] = useStudy(`/studies/${param.id}`);
  // console.log(applications, param, study);
  console.log(applicants);

  const approvalButton = async id => {
    try {
      await api.patch(
        `/studies/${param.id}/applications/${id}/status`,
        {
          approvalStatus: '승인',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('승인완료!');
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  const rejectButton = async id => {
    try {
      await api.patch(
        `/studies/${param.id}/applications/${id}/status`,
        {
          approvalStatus: '거절',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('승인거절!');
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

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
            {study.title}
          </StCompanyApplicantStudyTitle>
          <div>
            <StCompanyApplicantDiv>2시간 전 등록</StCompanyApplicantDiv>
            <StCompanyApplicantCount>
              {applicants?.length}명 지원
            </StCompanyApplicantCount>
          </div>
        </StCompanyApplicantFlexWrap>
        <StFlexBox sort="space-between">
          <StCompanyApplicantPay>
            <StCompanyApplicationPayStrong>
              {study.pay}
            </StCompanyApplicationPayStrong>
            원
          </StCompanyApplicantPay>
          <StCompanyApplicantPay>
            {study.category} | {convertToShortDate(study.endDate)}
          </StCompanyApplicantPay>
        </StFlexBox>
      </StCompanyApplicantStudyWrap>
      <ul
        style={{
          gap: '10px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {applicants?.length ? (
          <>
            {applicants?.map(applicant => {
              return (
                <li key={applicant.id}>
                  <StCompanyApplicantList>
                    <StCompanyApplicantListWrap>
                      <StCompanyApplicantListName>
                        {applicant.userName}
                      </StCompanyApplicantListName>
                      <StCompanyApplicantListGender>
                        {applicant.dateOfBirth} | {applicant.userGender}
                      </StCompanyApplicantListGender>
                    </StCompanyApplicantListWrap>
                    <StCompanyApplicantListPhoneNumber>
                      {applicant.userPhone}
                    </StCompanyApplicantListPhoneNumber>
                    <StCompanyApplicantListAddress>
                      {applicant.userAddress}
                    </StCompanyApplicantListAddress>
                    <StCompanyApplicantListMessage>
                      <StCompanyApplicantListMessageTitle>
                        하고싶은 한마디
                      </StCompanyApplicantListMessageTitle>
                      <StCompanyApplicantListMessageBody>
                        {applicant.message}
                      </StCompanyApplicantListMessageBody>
                    </StCompanyApplicantListMessage>
                    <StCompanyApplicantListButtons>
                      <Button
                        variant="dark"
                        onClick={() => approvalButton(applicant.id)}
                        style={{
                          width: '156px',
                        }}
                      >
                        지원승인
                      </Button>
                      <Button
                        variant="white"
                        onClick={() => rejectButton(applicant.id)}
                        style={{
                          width: '156px',
                          border: '1px solid black',
                        }}
                      >
                        지원거절
                      </Button>
                    </StCompanyApplicantListButtons>
                  </StCompanyApplicantList>
                </li>
              );
            })}
          </>
        ) : (
          <p>지원자가 없습니다</p>
        )}
      </ul>
    </StCompanyApplicantWrap>
  );
}

export default StudyApplicant;
