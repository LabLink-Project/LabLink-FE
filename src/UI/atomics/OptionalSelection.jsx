import React from 'react';
import {
  StOptionalSelectionLabel,
  StOptionalSelectionWrap,
} from '../styles/OptionalSelection.styled';
import { StCheckbox } from '../styles/common.styled';

function OptionalSelection({ label }) {
  return (
    <StOptionalSelectionWrap>
      <StCheckbox
        type="checkbox"
        id={label}
      />
      <StOptionalSelectionLabel htmlFor={label}>
        {label}
      </StOptionalSelectionLabel>
    </StOptionalSelectionWrap>
  );
}

export default OptionalSelection;
