import { useState } from 'react';
import { apiWithJWT } from 'src/api/api';

function useBookmark(id, isbookmarked) {
  const [isbookmark, setIsBookmark] = useState(isbookmarked);

  const onClickBookmarkHandler = () => {
    setIsBookmark(!isbookmark);
    bookmarkRequest();
  };

  const bookmarkRequest = async () => {
    const response = await apiWithJWT.post(`/studies/${id}/bookmark`);
    console.log(response.data);
  };

  return [isbookmark, onClickBookmarkHandler];
}

export default useBookmark;
