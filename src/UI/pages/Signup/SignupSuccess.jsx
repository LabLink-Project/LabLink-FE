import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  StSignupHeader,
  StSignupLapLink,
  StSignupTitle,
} from 'src/UI/styles/Signup.styled';
import { cookies } from 'src/shared/Cookie';
import { URI } from 'src/shared/URIs';

function SignupSuccess() {
  const nav = useNavigate();

  // 로그인 상태면 못 들어오게 막기
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      alert('이미 로그인 하셨습니다!');
      nav(URI.crud.home);
    }
  }, [cookies]);

  return (
    <Layout>
      <StSignupHeader>
        <StSignupTitle>
          <StSignupLapLink>LabLink</StSignupLapLink>
          에 오신 가입하신걸 <br />
          축하드립니다!
        </StSignupTitle>
      </StSignupHeader>
      <p
        style={{
          color: 'gray',
        }}
      >
        이제 LapLink의 유저들과 함께 <br />
        많은 실험을 진행할 수 있어요!
      </p>
      <div
        className="d-grid gap-2"
        style={{
          marginTop: '430px',
        }}
      >
        <Button
          variant="dark"
          size="lg"
          onClick={() => nav(URI.auth.signin.user)}
        >
          로그인 페이지로 이동
        </Button>
      </div>
    </Layout>
  );
}

export default SignupSuccess;
