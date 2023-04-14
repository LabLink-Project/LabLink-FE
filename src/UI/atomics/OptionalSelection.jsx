import React from 'react';
import {
  StOptionalSelectionCheckbox,
  StOptionalSelectionLabel,
} from '../styles/OptionalSelection.styled';
import { StFlexBox } from '../styles/common.styled';

function OptionalSelection({ label }) {
  return (
    <StFlexBox>
      <StOptionalSelectionCheckbox
        type="checkbox"
        id={label}
      />
      <StOptionalSelectionLabel htmlFor={label}>
        {label}
      </StOptionalSelectionLabel>
    </StFlexBox>
  );
}

export default OptionalSelection;
