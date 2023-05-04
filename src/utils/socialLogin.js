export const openKakaoLogin = () => {
  const { REACT_APP_KAKAO_KEY, REACT_APP_KAKAO_REDIRECT_URL } = process.env;
  const requestURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;
  console.log(REACT_APP_KAKAO_KEY, REACT_APP_KAKAO_REDIRECT_URL, requestURL);

  window.open(requestURL, '_self');
};
