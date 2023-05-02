import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../UI/pages/Signup/Signup';
import SignupUser from '../UI/pages/Signup/SignupUser';
import SignupCompany from '../UI/pages/Signup/SignupCompany';
import LoginUser from '../UI/pages/Login/LoginUser';
import LoginCompany from '../UI/pages/Login/LoginCompany';
import ServiceTerms from '../UI/pages/Terms/ServiceTerms';
import SignupSuccess from '../UI/pages/Signup/SignupSuccess';
import Home from 'src/UI/pages/Home';
import ReadStudyDetail from 'src/UI/pages/ReadStudyDetail';
import BookmarkList from 'src/UI/pages/BookmarkList';
import PersonalPage from 'src/UI/pages/PersonalPage';
import EditPersonalProfile from 'src/UI/pages/EditPersonalProfile';
import PersonalRequest from 'src/UI/pages/PersonalRequest';
import CompanyApplicant from 'src/UI/pages/CompanyApplicant';
import EndStudyList from 'src/UI/pages/CompanyEndStudyList';
import ReadStudy from 'src/UI/pages/ReadStudy';
import Search from 'src/UI/pages/Search';
import CreateStudy from 'src/UI/pages/CreateStudy';
import { URI } from './URIs';
import CompanyPage from 'src/UI/pages/CompanyPage';
import OngoingStudy from 'src/UI/pages/CompanyOngoingStudy';
import Feedback from 'src/UI/pages/ReadFeedback';
import StudySchedule from 'src/UI/pages/StudySchedule';
import Application from 'src/UI/pages/Application/Application';
import PersonalTerms from 'src/UI/pages/Terms/PersonalTerms';
import MarketingTerms from 'src/UI/pages/Terms/MarketingTerms';
import EditCompanyProfile from 'src/UI/pages/EditCompanyProfile';
import CompanyOngoingStudy from 'src/UI/pages/CompanyOngoingStudy';
import CompanyEndStudyList from 'src/UI/pages/CompanyEndStudyList';
import UserOngoingStudy from 'src/UI/pages/PersonalOngoingStudy';
import UserEndStudy from 'src/UI/pages/PersonalEndStudy';
import PersonalOngoingStudy from 'src/UI/pages/PersonalOngoingStudy';
import PersonalEndStudy from 'src/UI/pages/PersonalEndStudy';
import CompanyFeedback from 'src/UI/pages/ReadFeedback';
import PersonalFeedback from 'src/UI/pages/CreateFeedback';
import CreateFeedback from 'src/UI/pages/CreateFeedback';
import ReadFeedback from 'src/UI/pages/ReadFeedback';
import KakaoRedirect from 'src/UI/pages/SocialLogin/KakaoRedirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* CRUD */}
        <Route
          path={URI.crud.home}
          element={<Home />}
        />
        <Route
          path={URI.crud.search}
          element={<Search />}
        />
        <Route
          path={URI.crud.studys}
          element={<ReadStudy />}
        />
        <Route
          path={URI.crud.studyDetail}
          element={<ReadStudyDetail />}
        />
        <Route
          path={URI.crud.studyApply}
          element={<Application />}
        />
        <Route
          path={URI.crud.bookmark}
          element={<BookmarkList />}
        />

        {/* auths */}
        <Route
          path={URI.auth.signin.user}
          element={<LoginUser />}
        />
        <Route
          path={URI.auth.signin.company}
          element={<LoginCompany />}
        />
        <Route
          path={URI.auth.signup.home}
          element={<Signup />}
        />
        <Route
          path={URI.auth.signup.user}
          element={<SignupUser />}
        />
        <Route
          path={URI.auth.signup.company}
          element={<SignupCompany />}
        />
        <Route
          path={URI.auth.signup.serviceTerm}
          element={<ServiceTerms />}
        />
        <Route
          path={URI.auth.signup.personalTerm}
          element={<PersonalTerms />}
        />
        <Route
          path={URI.auth.signup.marketingTerm}
          element={<MarketingTerms />}
        />
        <Route
          path={URI.auth.signup.done}
          element={<SignupSuccess />}
        />
        {/* 기업 회원가입 약관 예정
        <Route
          path={URI.auth.signup.companyTerm}
          element={< />}
        /> */}
        {/* 아이디/비밀번호 찾기 예정
        <Route
          path={URI.auth.signup.findID}
          element={< />}
        /> */}

        {/* 개인 마이페이지 */}
        <Route
          path={URI.mypage.user.home}
          element={<PersonalPage />}
        />
        {/* 비밀번호 확인 + 내 정보 수정 페이지 통일 */}
        <Route
          path={URI.mypage.user.editInfo}
          element={<EditPersonalProfile />}
        />
        {/* 신청한 실험 */}
        <Route
          path={URI.mypage.user.applyStudy}
          element={<PersonalRequest />}
        />
        {/* 진행할 실험 */}
        <Route
          path={URI.mypage.user.ongoingStudy}
          element={<PersonalOngoingStudy />}
        />
        {/* 완료한 실험 */}
        <Route
          path={URI.mypage.user.endStudy}
          element={<PersonalEndStudy />}
        />
        <Route
          path={`${URI.mypage.user.feedback}/:id`}
          element={<CreateFeedback />}
        />
        {/* 신청서 작성 페이지 구현 예정 */}
        {/* <Route
          path={URI.mypage.user.application}
          element={< />}
        /> */}

        {/* 기업 마이페이지 */}
        <Route
          path={URI.mypage.company.home}
          element={<CompanyPage />}
        />
        <Route
          path={URI.mypage.company.editInfo}
          element={<EditCompanyProfile />}
        />
        <Route
          path={URI.mypage.company.createStudy}
          element={<CreateStudy />}
        />
        <Route
          path={URI.mypage.company.ongoingStudy}
          element={<CompanyOngoingStudy />}
        />
        <Route
          path={URI.mypage.company.endStudy}
          element={<CompanyEndStudyList />}
        />
        <Route
          path={URI.mypage.company.studySchedule}
          element={<StudySchedule />}
        />
        <Route
          path={URI.mypage.company.applicant}
          element={<CompanyApplicant />}
        />
        <Route
          path={`${URI.mypage.company.feedback}/:id`}
          element={<ReadFeedback />}
        />
        {/* Social Login */}
        <Route
          path={URI.social.kakao}
          element={<KakaoRedirect />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
