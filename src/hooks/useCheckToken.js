import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from 'src/utils/cookieHandler';

// 훅으로 처리하는 방법이 있을텐데..
function useCheckToken() {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!isSignIn) {
  //       alert('로그인이 필요한 기능입니다.');
  //       navigate('/auth/signin/user');
  //     }
  //   }, []);
}

export function isSignIn() {
  const token = getCookie('token');
  if (token) return true;
  return false;
}

export default useCheckToken;
