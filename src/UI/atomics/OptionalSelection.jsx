import React from 'react';
import {
  StOptionalSelectionCheckbox,
  StOptionalSelectionLabel,
  StOptionalSelectionWrap,
} from '../styles/OptionalSelection.styled';

function OptionalSelection({ label }) {
  return (
    <StOptionalSelectionWrap>
      <StOptionalSelectionCheckbox
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
