import React from 'react';
import { useDispatch } from 'react-redux';
import { setStudyDetailAddress } from 'src/redux/modules/studyHandler';

function Option({ children, closeHandler }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setStudyDetailAddress(children));
    closeHandler();
  };

  return <div onClick={onClickHandler}>{children}</div>;
}

export default Option;
