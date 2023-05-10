import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiWithJWT } from 'src/api/api';
import { getCookie } from 'src/utils/cookieHandler';

function useBookmark(id, isbookmarked) {
  const [isbookmark, setIsBookmark] = useState(isbookmarked);

  const navigate = useNavigate();

  const onClickBookmarkHandler = () => {
    const tokenValue = getCookie('token');
    if (tokenValue) {
      setIsBookmark(!isbookmark);
      bookmarkRequest();
    }
    if (!tokenValue) {
      alert('로그인이 필요합니다.');
      navigate('/auth/signin/user');
    }
  };

  const bookmarkRequest = async () => {
    apiWithJWT.post(`/studies/${id}/bookmark`);
  };

  return [isbookmark, onClickBookmarkHandler];
}

export default useBookmark;
