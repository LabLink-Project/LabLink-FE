import React, { useEffect, useRef, useState } from 'react';
import Study from './Study';
import { StHomeRealTimeUpdateH2 } from '../styles/HomeRealTimeUpdate.styled';
import useStudys from 'src/hooks/useStudys';
import useReduxState from 'src/hooks/useReduxState';
import { StOverlap } from '../styles/HomePopularStudy.styled';
import { apiWithJWT } from 'src/api/api';

function HomeRealTimeUpdate() {
  const { studyType, detailAddress } = useReduxState();
  // const [studys] = useStudys(`/studies?pageIndex=${page}&pageCount=10`);

  // intersection observer api를 이용해 무한 스크롤 구현
  const [studys, setStudys] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const handleObserver = entries => {
    const target = entries[0];
    if (target.isIntersecting) setPage(prev => prev + 1);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  // page index와 page count가 정상 작동하는 지 확인하기
  const loadData = async () => {
    const res = await apiWithJWT.get(`/studies?pageIndex=${page}&pageCount=10`);
    const { data } = res.data;
    setStudys(prev => [...prev, ...data]);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <StOverlap>
      <StHomeRealTimeUpdateH2>실시간 업데이트</StHomeRealTimeUpdateH2>
      <ul>
        {studys.length
          ? studys
              .filter(obj => {
                if (studyType === 'ALL') return obj;
                return obj.category === studyType;
              })
              .filter(obj => {
                if (detailAddress === '전체') return obj;
                return obj.address === detailAddress;
              })
              .map(obj => {
                return (
                  <Study
                    obj={obj}
                    key={obj.id}
                  />
                );
              })
          : '실시간 업데이트 공고를 불러오지 못했어요 😥'}
        <div ref={loaderRef}>로딩 중...</div>
      </ul>
    </StOverlap>
  );
}

export default HomeRealTimeUpdate;
