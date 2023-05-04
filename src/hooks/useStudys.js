import { useEffect, useState } from 'react';
import { apiWithJWT } from 'src/api/api';

function useStudys(URI) {
  const [studys, setStudys] = useState([]);
  const getStudys = async () => {
    const response = await apiWithJWT.get(URI);
    // console.log(`${URI} response : `, response.data.data);
    setStudys([...response.data.data]);
  };

  useEffect(() => {
    getStudys();
  }, [URI]);

  return [studys];
}

export default useStudys;
