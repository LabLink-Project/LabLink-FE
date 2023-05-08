import React from 'react';
import { StDeadline } from 'src/UI/styles/PopularStudy/Deadline.styled';
import { convertToShortDate } from 'src/utils/formatDate';
import styled from 'styled-components';

function Deadline({ children }) {
  return (
    <StStudyDeadline>
      {convertToShortDate(children) + ' 지원 마감'}
    </StStudyDeadline>
  );
}

export default Deadline;

const StStudyDeadline = styled(StDeadline)`
  margin-bottom: 0;
`;
