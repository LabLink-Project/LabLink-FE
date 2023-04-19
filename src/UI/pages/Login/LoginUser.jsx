import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cookies } from '../../../shared/Cookie';
import Layout from '../../components/Layout';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { URI } from 'src/shared/URIs';

function LoginUser() {
  const nav = useNavigate();

  // 로그인 state
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  // tab 선택 state
  const [key, setKey] = useState('user');

  // 로그인 onchange
  const signupChangeHandler = e => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // 로그인 버튼
  const loginSubmitHandler = async e => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        login
      );
      cookies.set('token', data.headers.authorization.split(' ')[1], {
        path: '/',
      });
      nav('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
      <Tabs
        activeKey={key}
        onSelect={k => setKey(k)}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Tab
          eventKey="user"
          title="개인회원"
        >
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            onSubmit={loginSubmitHandler}
          >
            <input
              type="text"
              name="email"
              value={login.email}
              onChange={signupChangeHandler}
              placeholder="이메일"
            />
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={signupChangeHandler}
              placeholder="비밀번호"
            />
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                type="submit"
              >
                로그인
              </Button>
            </div>
            <div>
              <p>SNS로 간편하게 로그인하기</p>
            </div>
          </form>
          <div
            style={{
              fontSize: '10px',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <Link
              to={URI.auth.signup.home}
              style={{
                color: 'gray',
              }}
            >
              LapLink가 처음이신가요?
            </Link>
            <Link
              // 아이디 / 비밀번호 찾기 페이지 구현되면 수정
              to="/"
              style={{
                color: 'gray',
              }}
            >
              아이디/비밀번호 찾기
            </Link>
          </div>
        </Tab>
        <Tab
          eventKey="company"
          title="기업회원"
          onEnter={() => nav(URI.auth.signin.company)}
        />
      </Tabs>
    </Layout>
  );
}

export default LoginUser;
