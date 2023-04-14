import React, { useState } from 'react';
import axios from 'axios';
import { cookies } from '../../../shared/Cookie';
import Layout from '../../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function LoginCompany() {
  const nav = useNavigate();

  // 로그인 state
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  // tab 선택 state
  const [key, setKey] = useState('company');

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
        `${process.env.REACT_APP_SERVER_URL}/companies/login`,
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
          onEnter={() => nav('/login/user')}
        />
        <Tab
          eventKey="company"
          title="기업회원"
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
              to="/signup"
              style={{
                color: 'gray',
              }}
            >
              LapLink가 처음이신가요?
            </Link>
            <Link
              style={{
                color: 'gray',
              }}
            >
              아이디/비밀번호 찾기
            </Link>
          </div>
        </Tab>
      </Tabs>
    </Layout>
  );
}

export default LoginCompany;
