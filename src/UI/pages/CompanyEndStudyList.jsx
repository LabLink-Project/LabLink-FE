import React, { useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StEndStudyListButton,
  StEndStudyListButtonWrap,
  StEndStudyListCount,
  StEndStudyListDate,
  StEndStudyListDateWrap,
  StEndStudyListDivWrap,
  StEndStudyListFeedbackButton,
  StEndStudyListFlexWrap,
  StEndStudyListOnline,
  StEndStudyListOnlineFlexWrap,
  StEndStudyListPay,
  StEndStudyListPayStrong,
  StEndStudyListQueryButton,
  StEndStudyListTitle,
  StEndStudyListWrap,
} from '../styles/EndStudyList.styled';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { cookies } from 'src/shared/Cookie';
import { api } from 'src/api/api';

function CompanyEndStudyList() {
  const nav = useNavigate();
  const token = cookies.get('token');

  const [endStudies, setEndStudies] = useState();

  const getEndStudies = async () => {
    try {
      const { data } = await api.get('/companies/studies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEndStudies(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  // const endStudy = endStudies?.filter(
  //   endStudy => endStudy.studyStatus === 'END'
  // );
  const endStudy = endStudies?.filter(
    endStudy => endStudy.studyStatus === 'ONGOING'
  );

  useEffect(() => {
    getEndStudies();
  }, []);

  return (
    <StEndStudyListWrap>
      <SearchHeader title="실험 종료된 공고 확인" />
      <StEndStudyListButtonWrap>
        <StEndStudyListButton>1개월</StEndStudyListButton>
        <StEndStudyListButton>3개월</StEndStudyListButton>
        <StEndStudyListButton>6개월</StEndStudyListButton>
        <StEndStudyListButton>12개월</StEndStudyListButton>
      </StEndStudyListButtonWrap>
      <StEndStudyListDateWrap>
        {/* 날짜 표시 방법 수정 */}
        {/* 달력 이미지 추가 */}
        <StEndStudyListDate type="date" />
        <StEndStudyListDate type="date" />
        <StEndStudyListQueryButton
          type="button"
          value="조회"
        />
      </StEndStudyListDateWrap>
      {endStudy?.length ? (
        <>
          {endStudy.map(endStudy => {
            return (
              <StEndStudyListDivWrap key={endStudy.id}>
                <StEndStudyListOnlineFlexWrap sort="space-between">
                  <StEndStudyListOnline>
                    {endStudy.category}
                  </StEndStudyListOnline>
                  <StEndStudyListCount>
                    {endStudy.subjectCount}명 작성
                  </StEndStudyListCount>
                </StEndStudyListOnlineFlexWrap>
                <StEndStudyListTitle>{endStudy.title}</StEndStudyListTitle>
                <StEndStudyListFlexWrap sort="space-between">
                  <div>
                    <StEndStudyListPay>
                      <StEndStudyListPayStrong>
                        {endStudy.pay}
                      </StEndStudyListPayStrong>
                      원
                    </StEndStudyListPay>
                    <StEndStudyListPay>
                      {endStudy.endDate}에 신청 마감
                    </StEndStudyListPay>
                  </div>
                  <StEndStudyListFeedbackButton
                    onClick={() =>
                      nav(`${URI.mypage.company.feedback}/${endStudy.id}`)
                    }
                  >
                    피드백 확인
                  </StEndStudyListFeedbackButton>
                </StEndStudyListFlexWrap>
              </StEndStudyListDivWrap>
            );
          })}
        </>
      ) : (
        <p>완료한 공고가 없습니다.</p>
      )}
    </StEndStudyListWrap>
  );
}

export default CompanyEndStudyList;
