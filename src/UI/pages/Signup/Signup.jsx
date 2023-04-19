import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { StLoginHeader, StLoginTitle } from 'src/UI/styles/Login.styled';
import {
  StSignupLogin,
  StSignupSpan,
  StSignupWrap,
} from 'src/UI/styles/Signup.styled';
import { cookies } from 'src/shared/Cookie';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const nav = useNavigate();

  // 로그인 상태면 못 들어오게 막기
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      alert('이미 로그인 하셨습니다!');
      nav('/');
    }
  }, [cookies]);

  return (
    <Layout>
      <StLoginHeader>
        <StLoginTitle>LabLink</StLoginTitle>
      </StLoginHeader>
      <StSignupWrap>
        <div>
          <StSignupSpan>
            정보를 등록하고 여러가지 테스트에 참여하세요
          </StSignupSpan>
          <br />
          <Link
            to="/signup/user"
            style={{
              color: 'black',
              fontWeight: '600',
            }}
          >
            개인회원 가입
          </Link>
        </div>
        <div>
          <StSignupSpan>공고를 등록하고 참여자를 쉽게 찾아보세요</StSignupSpan>
          <br />
          <Link
            to="/signup/company"
            style={{
              color: 'black',
              fontWeight: '600',
            }}
          >
            기업회원 가입
          </Link>
        </div>
        <StSignupLogin>
          <Link
            to="/login/user"
            style={{
              color: 'gray',
            }}
          >
            이미 계정이 있으신가요?
          </Link>
        </StSignupLogin>
      </StSignupWrap>
    </Layout>
  );
}

export default Signup;
