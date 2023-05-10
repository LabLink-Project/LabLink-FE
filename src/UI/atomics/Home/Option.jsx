import React from 'react';
import { useDispatch } from 'react-redux';
import { setStudyDetailAddress } from 'src/redux/modules/studyHandler';
import { fontColors } from 'src/shared/designColors';
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
  background-color: ${fontColors.white};
  border-radius: 5px;
  padding: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export default Option;
