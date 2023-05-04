import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { api } from 'src/api/api';
import { cookies } from 'src/shared/Cookie';

function KakaoRedirect() {
  const href = new URL(window.location.href);
  console.log(href.searchParams.get('code'));
  const code = href.searchParams.get('code');

  const navigate = useNavigate();

  useEffect(() => {
    if (code)
      api
        .get(`/users/kakao/login?code=${code}`)
        .then(res => {
          // console.log(res);
          // 토큰 저장
          cookies.set('token', res.headers.authorization.split(' ')[1], {
            path: '/',
          });

          // 홈 화면 이동
          navigate('/');
        })
        .catch(err => {
          console.error(err);
          // 얼럿 창 띄우기
          alert('소셜 로그인 과정에서 오류가 발생했습니다 😥');

          // 로그인 화면 이동
          navigate('/auth/signin/user');
        });
  }, []);

  return (
    <div>
      카카오 소셜 로그인 리다이렉트 페이지입니다. 인가 코드를 받아주세요!
    </div>
  );
}

export default KakaoRedirect;
