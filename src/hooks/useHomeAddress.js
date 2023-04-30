import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStudyType } from 'src/redux/modules/studyHandler';

// 데이터 관리
function useHomeAddress() {
  const [address, setAddress] = useState('ALL');

  const dispatch = useDispatch(state => state);

  useEffect(() => {
    dispatch(getStudyType(address));
  }, [address]);

  return [address, ...useAddressInteraction(setAddress)];
}

// 상호작용 관리
function useAddressInteraction(setAddress) {
  const onClickAllHandler = () => setAddress('ALL');
  const onClickOnlineHandler = () => setAddress('ONLINE');
  const onClickOfflineHandler = () => setAddress('OFFLINE');

  return [onClickAllHandler, onClickOnlineHandler, onClickOfflineHandler];
}

export default useHomeAddress;
