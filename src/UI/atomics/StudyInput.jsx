import React from 'react';
import { StStudyInput } from '../styles/StudyInput.styled';

function StudyInput({ placeholder }) {
  return (
    <StStudyInput placeholder={placeholder ? placeholder : '입력해 주세요.'} />
  );
}

export default StudyInput;
