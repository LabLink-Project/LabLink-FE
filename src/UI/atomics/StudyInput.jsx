import React from 'react';
import { StStudyInput } from '../styles/StudyInput.styled';

function StudyInput({ placeholder, type, name, value, onChange }) {
  return (
    <StStudyInput
      placeholder={placeholder ? placeholder : '입력해 주세요.'}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default StudyInput;
