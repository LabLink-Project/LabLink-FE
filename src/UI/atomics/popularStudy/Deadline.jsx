import React from 'react';
import { StDeadline } from 'src/UI/styles/PopularStudy/Deadline.styled';
import { convertToShortDate } from 'src/utils/formatDate';

function Deadline({ children }) {
  return <StDeadline>{convertToShortDate(children) + ' 지원 마감'}</StDeadline>;
}

export default Deadline;
