import React from 'react';
import { StStudyInput } from '../styles/StudyInput.styled';

function StudyInput({ placeholder, type, value, onChange }) {
  return (
    <StStudyInput
      placeholder={placeholder ? placeholder : '입력해 주세요.'}
      type={type}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default StudyInput;
