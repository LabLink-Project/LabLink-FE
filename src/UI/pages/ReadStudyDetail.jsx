import React from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StReadStudyDetailImage,
  StReadStudyDetailHeader,
  StReadStudyDetailWrap,
  StReadStudyDetailDateAndPayWrap,
  StReadStudyDetailDate,
  StReadStudyDetailQuestion,
  StReadStudyDetailApplication,
} from '../styles/ReadStudyDetail.styled';
import { StFlexBox } from '../styles/common.styled';
import { useParams } from 'react-router-dom';
import useStudy from 'src/hooks/useStudy';
import styled from 'styled-components';
import { soonDevelop } from 'src/utils/soonDevelop';
import { useNavigate } from 'react-router-dom';
import { URI } from 'src/shared/URIs';
import { isDefaultImage } from 'src/utils/parseData';
import { useAccountState } from 'src/hooks/useReduxState';
import { StMarginWrap } from '../styles/SharedStyle/MarginWrap.styled';
import Place from '../atomics/popularStudy/Place';
import Bookmark from '../atomics/popularStudy/Bookmark';
import CompanyName from '../atomics/popularStudy/CompanyName';
import Address from '../atomics/Study/Address';
import sectionLine from 'src/assets/design/sectionLine.svg';
import Deadline from '../atomics/popularStudy/Deadline';
import Pay from '../atomics/popularStudy/Pay';
import { fontColors } from 'src/shared/designColors';
import Applicant from '../atomics/StudyDetail/Applicant';
import StudyInfomation from '../atomics/StudyDetail/StudyInfomation';
import Detail from '../atomics/StudyDetail/Detail';
import Title2 from '../atomics/Study/Title2';

function ReadStudyDetail() {
  const { id } = useParams();
  const [studys] = useStudy(`/studies/${id}`);

  const navigate = useNavigate();
  const userType = useAccountState('role');

  const applyHandler = () => {
    if (!userType) {
      alert('공고에 지원하시려면 로그인이 필요합니다 🤔');
      navigate(`${URI.auth.signin.user}`);
      return;
    }
    if (userType === 'BUSINESS')
      return alert('기업 회원은 공고에 지원하실 수 없습니다 😥');
    if (studys.isapplied) return alert('이미 지원한 공고입니다 🥺');
    if (!studys.isapplied) navigate(`${URI.crud.studys}/${id}/apply`);
  };

  return (
    <div>
      <SearchHeader />
      <StReadStudyDetailImage
        src={studys.thumbnailImageURL}
        alt="섬네일 이미지"
      />
      <StMarginWrap>
        <StReadStudyDetailHeader sort="space-between">
          <Place category={studys.category} />
          <StFlexBox>
            {/* n분 전 */}
            <Bookmark
              id={studys.id}
              isbookmarked={studys.isbookmarked}
            />
          </StFlexBox>
        </StReadStudyDetailHeader>
        <StReadStudyDetailWrap>
          <CompanyName>{studys.companyName}</CompanyName>
          <Title2>{studys.title}</Title2>
        </StReadStudyDetailWrap>
        <StReadStudyDetailDateAndPayWrap sort="space-between">
          <StReadStudyDetailDate>
            <StFlexBox>
              {studys.address === 'ONLINE' ? (
                ''
              ) : (
                <>
                  <Address>{studys.address}</Address>
                  <StImg
                    src={sectionLine}
                    alt="구분선"
                  />
                </>
              )}

              <Deadline>{studys.date}</Deadline>
            </StFlexBox>
          </StReadStudyDetailDate>
          <Pay>{studys.pay}</Pay>
        </StReadStudyDetailDateAndPayWrap>
      </StMarginWrap>

      <BackgroundWrap>
        <Applicant
          gender={studys.subjectGender}
          minAge={studys.subjectMinAge}
          maxAge={studys.subjectMaxAge}
          benefit={studys.benefit}
        />
        <StudyInfomation infomation={studys.studyInfo} />
        <Detail description={studys.description} />

        {/* 이미지가 불러와지지 않았을 때 처리 고민하기 */}
        {isDefaultImage(studys.detailImageURL) ? (
          ''
        ) : (
          <StImage
            src={studys.detailImageURL}
            alt="이미지"
          />
        )}
      </BackgroundWrap>
      <ButtonsWrap>
        <StFlexBox>
          <StReadStudyDetailQuestion onClick={soonDevelop}>
            문의하기
          </StReadStudyDetailQuestion>
          <StReadStudyDetailApplication onClick={applyHandler}>
            {studys.isapplied ? '지원완료' : '지원하기'}
          </StReadStudyDetailApplication>
        </StFlexBox>
      </ButtonsWrap>
    </div>
  );
}

const StImage = styled.img`
  min-width: 335px;
  max-width: 335px;
`;

const StImg = styled.img`
  margin: 0 4px;
`;

const BackgroundWrap = styled.div`
  background-color: ${fontColors.background};
  padding: 32px 20px 0;
  border-radius: 24px 24px 0 0;
`;

const ButtonsWrap = styled(StFlexBox)`
  margin: 16px 20px;
`;

export default ReadStudyDetail;
