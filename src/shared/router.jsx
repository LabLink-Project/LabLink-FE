import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../UI/pages/Signup/Signup';
import SignupUser from '../UI/pages/Signup/SignupUser';
import SignupCompany from '../UI/pages/Signup/SignupCompany';
import LoginUser from '../UI/pages/Login/LoginUser';
import LoginCompany from '../UI/pages/Login/LoginCompany';
import UserTerms from '../UI/pages/Signup/UserTerms';
import SignupSuccess from '../UI/pages/Signup/SignupSuccess';
import Home from 'src/UI/pages/Home';
import ReadStudyDetail from 'src/UI/pages/ReadStudyDetail';
import BookmarkList from 'src/UI/pages/BookmarkList';
import PersonalPage from 'src/UI/pages/PersonalPage';
import EditPersonalProfile from 'src/UI/pages/EditPersonalProfile';
import PersonalRequest from 'src/UI/pages/PersonalRequest';
import CompanyApplicant from 'src/UI/pages/CompanyApplicant';
import EndStudyList from 'src/UI/pages/EndStudyList';
import ReadStudy from 'src/UI/pages/ReadStudy';
import Search from 'src/UI/pages/Search';
import CreateStudy from 'src/UI/pages/CreateStudy';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* CRUD */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/studys"
          element={<ReadStudy />}
        />
        <Route
          path="/studys/:id"
          element={<ReadStudyDetail />}
        />
        <Route
          path="/bookmarks"
          element={<BookmarkList />}
        />

        {/* auths */}
        {/* 로그인 선택 예정
        <Route
          path="/auth"
          element={</>}
        /> */}
        <Route
          path="/auth/signin/user"
          element={<LoginUser />}
        />
        <Route
          path="/auth/signin/company"
          element={<LoginCompany />}
        />
        <Route
          path="/auth/signup"
          element={<Signup />}
        />
        <Route
          path="/auth/signup/user"
          element={<SignupUser />}
        />
        <Route
          path="/auth/signup/user/term"
          element={<UserTerms />}
        />
        <Route
          path="/auth/signup/company"
          element={<SignupCompany />}
        />
        {/* 기업 회원가입 약관 예정
        <Route
          path="/auth/signup/company/term"
          element={< />}
        /> */}
        <Route
          path="/auth/signup/done"
          element={<SignupSuccess />}
        />
        {/* 아이디/비밀번호 찾기 예정
        <Route
          path="/auth/findid"
          element={< />}
        /> */}

        {/* 개인 마이페이지 */}
        <Route
          path="/mypage/user"
          element={<PersonalPage />}
        />
        {/* 비밀번호 확인 + 내 정보 수정 페이지 통일 */}
        <Route
          path="/mypage/user/editinfo"
          element={<EditPersonalProfile />}
        />
        {/* 신청할, 진행할, 완료된 실험 수정 예정 */}
        <Route
          path="/mypage/user/apply"
          element={<PersonalRequest />}
        />
        {/* 신청서 작성 페이지 구현 예정 */}
        {/* <Route
          path="/mypage/user/application"
          element={< />}
        /> */}

        {/* 기업 마이페이지 */}
        {/* 기업 마이페이지 구현 예정 */}
        {/* <Route
          path="/mypage/company"
          element={< />}
        /> */}

        <Route
          path="/mypage/company/applicant"
          element={<CompanyApplicant />}
        />
        <Route
          path="/mypage/company/feedbacks"
          element={<EndStudyList />}
        />
        <Route
          path="/mypage/company/makestudy"
          element={<CreateStudy />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
