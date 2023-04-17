import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from '../UI/pages/Signup/Signup';
import SignupUser from '../UI/pages/Signup/SignupUser';
import SignupCompany from '../UI/pages/Signup/SignupCompany';
import LoginUser from '../UI/pages/Login/LoginUser';
import LoginCompany from '../UI/pages/Login/LoginCompany';
import UserTerms from '../UI/pages/Signup/UserTerms';
import SignupSuccess from '../UI/pages/Signup/SignupSuccess';
import UserMypage from '../UI/pages/UserMypage';
import UserMystudy from 'src/UI/pages/UserMystudy';
import Home from 'src/UI/pages/Home';
import ReadStudyDetail from 'src/UI/pages/ReadStudyDetail';
import BookmarkList from 'src/UI/pages/BookmarkList';
import PersonalPage from 'src/UI/pages/PersonalPage';
import EditPersonalProfile from 'src/UI/pages/EditPersonalProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail"
          element={<ReadStudyDetail />}
        />
        <Route
          path="/bookmarks"
          element={<BookmarkList />}
        />
        <Route
          path="/mypage/user"
          element={<PersonalPage />}
        />
        <Route
          path="/mypage/check"
          element={<EditPersonalProfile />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/signup/user"
          element={<SignupUser />}
        />
        <Route
          path="/signup/user/terms"
          element={<UserTerms />}
        />
        <Route
          path="/signup/company"
          element={<SignupCompany />}
        />
        <Route
          path="/signup/success"
          element={<SignupSuccess />}
        />
        <Route
          path="/login/user"
          element={<LoginUser />}
        />
        <Route
          path="/login/company"
          element={<LoginCompany />}
        />
        <Route
          path="/user/mystudy"
          element={<UserMystudy />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
