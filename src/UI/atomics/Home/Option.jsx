import React from 'react';
import { useDispatch } from 'react-redux';
import { setStudyDetailAddress } from 'src/redux/modules/studyHandler';
import styled from 'styled-components';

function Option({ children, closeHandler }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setStudyDetailAddress(children));
    closeHandler();
  };

  return <StOption onClick={onClickHandler}>{children}</StOption>;
}

const StOption = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;

  &:hover {
    cursor: pointer;
  }
`;

export default Option;
