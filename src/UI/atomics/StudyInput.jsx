import React from 'react';
import { StStudyInput } from '../styles/StudyInput.styled';

function StudyInput({ placeholder, type, value, onChange, name }) {
  return (
    <StStudyInput
      placeholder={placeholder ? placeholder : '입력해 주세요.'}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      // required
    />
  );
}

export default StudyInput;
