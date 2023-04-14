import React from 'react';
import Layout from '../../components/Layout';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignupSuccess() {
  const nav = useNavigate();
  return (
    <Layout>
      <div
        style={{
          margin: '16px 0',
        }}
      >
        <h2
          style={{
            fontSize: '20px',
          }}
        >
          <span
            style={{
              fontWeight: '700',
              fontSize: '35px',
            }}
          >
            LabLink
          </span>
          에 오신 가입하신걸 <br />
          축하드립니다!
        </h2>
      </div>
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
          onClick={() => nav('/login/user')}
        >
          로그인 페이지로 이동
        </Button>
      </div>
    </Layout>
  );
}

export default SignupSuccess;
