import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { URI } from 'src/shared/URIs';

function Signup() {
  const nav = useNavigate();

  return (
    <Layout>
      <div
        style={{
          margin: '16px auto',
          marginBottom: '100px',
        }}
      >
        <h2
          style={{
            fontWeight: '700',
            fontSize: '35px',
          }}
        >
          LabLink
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div>
          <span
            style={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            정보를 등록하고 여러가지 테스트에 참여하세요
          </span>
          <br />
          <Link
            to={URI.auth.signup.user}
            style={{
              color: 'black',
              fontWeight: '600',
            }}
          >
            개인회원 가입
          </Link>
        </div>
        <div>
          <span
            style={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            공고를 등록하고 참여자를 쉽게 찾아보세요
          </span>
          <br />
          <Link
            to={URI.auth.signup.company}
            style={{
              color: 'black',
              fontWeight: '600',
            }}
          >
            기업회원 가입
          </Link>
        </div>
        <div
          style={{
            marginTop: '350px',

            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link
            to={URI.auth.signin.user}
            style={{
              color: 'gray',
            }}
          >
            이미 계정이 있으신가요?
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
