import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cookies } from '../../../shared/Cookie';
import Layout from '../../components/Layout';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {
  StLoginForm,
  StLoginHeader,
  StLoginInput,
  StLoginLinks,
  StLoginSNS,
  StLoginTitle,
} from 'src/UI/styles/Login.styled';
import { URI } from 'src/shared/URIs';
import { api } from 'src/api/api';
import FooterNav from 'src/UI/components/FooterNav';
import { openKakaoLogin } from 'src/utils/socialLogin';
import kakao from 'src/assets/design/kakao.svg';
import styled from 'styled-components';
import { StFlexBox } from 'src/UI/styles/common.styled';

function LoginUser() {
  const nav = useNavigate();

  // 로그인 state
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  // tab 선택 state
  const [key, setKey] = useState('user');

  // 로그인 상태면 못 들어오게 막기
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      alert('이미 로그인 하셨습니다!');
      nav(URI.crud.home);
    }
  }, [cookies]);

  // 로그인 onchange
  const signupChangeHandler = e => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  // 로그인 버튼
  const loginSubmitHandler = async e => {
    e.preventDefault();
    try {
      const data = await api.post('/users/login', login);
      cookies.set('token', data.headers.authorization.split(' ')[1], {
        path: '/',
      });
      nav(URI.crud.home);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Layout>
      <StLoginHeader>
        <StLoginTitle>LabLink</StLoginTitle>
      </StLoginHeader>
      <Tabs
        activeKey={key}
        onSelect={k => setKey(k)}
        variant="pills"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Tab
          eventKey="user"
          title="개인회원"
        >
          <StLoginForm onSubmit={loginSubmitHandler}>
            <StLoginInput
              type="text"
              name="email"
              value={login.email}
              onChange={signupChangeHandler}
              placeholder="이메일"
            />
            <StLoginInput
              type="password"
              name="password"
              value={login.password}
              onChange={signupChangeHandler}
              placeholder="비밀번호"
            />
            <div
              className="d-grid gap-2"
              style={{
                width: '90%',
              }}
            >
              <Button
                variant="dark"
                size="lg"
                type="sumbit"
              >
                로그인
              </Button>
            </div>
          </StLoginForm>
          <StLoginSNS>SNS로 간편하게 로그인하기</StLoginSNS>
          <StDiv>
            <button onClick={openKakaoLogin}>
              <img
                src={kakao}
                alt="카카오 소셜 로그인 버튼 이미지"
              />
            </button>
          </StDiv>
          <StLoginLinks>
            <Link
              to={URI.auth.signup.home}
              style={{
                color: 'gray',
              }}
            >
              LapLink가 처음이신가요?
            </Link>
            {/* <Link
              // 아이디 / 비밀번호 찾기 페이지 구현되면 수정
              to="/"
              style={{
                color: 'gray',
              }}
            >
              아이디/비밀번호 찾기
            </Link> */}
          </StLoginLinks>
        </Tab>
        <Tab
          eventKey="company"
          title="기업회원"
          onEnter={() => nav(URI.auth.signin.company)}
        />
      </Tabs>
      <FooterNav/>
    </Layout>
  );
}

const StDiv = styled(StFlexBox)`
  width: 192px;
  height: 48px;

  justify-content: center;

  margin: 16px auto 0;
`;

export default LoginUser;
