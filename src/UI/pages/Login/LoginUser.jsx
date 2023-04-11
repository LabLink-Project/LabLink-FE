import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { cookies } from '../../../shared/Cookie';

function LoginUser() {
  const nav = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const signupChangeHandler = e => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

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
    <>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onSubmit={loginSubmitHandler}
      >
        <div>
          <button
            type="button"
            onClick={() => nav('/login/user')}
          >
            개인회원
          </button>
          <button
            type="button"
            onClick={() => nav('/login/company')}
          >
            기업회원
          </button>
        </div>
        <input
          type="text"
          name="email"
          value={login.email}
          onChange={signupChangeHandler}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={signupChangeHandler}
        />
        <button>로그인</button>
        <button
          type="button"
          onClick={() => nav('/signup')}
        >
          회원가입하러가기
        </button>
      </form>
    </>
  );
}

export default LoginUser;
