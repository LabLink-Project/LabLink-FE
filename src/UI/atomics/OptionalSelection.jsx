import React from 'react';
import {
  StOptionalSelectionLabel,
  StOptionalSelectionWrap,
} from '../styles/OptionalSelection.styled';
import { StCheckbox } from '../styles/common.styled';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

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
