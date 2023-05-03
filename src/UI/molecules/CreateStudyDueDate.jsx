import React, { useEffect, useState } from 'react';
import {
  StCreateStudyDueDateWrap,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'src/UI/styles/customDatePicker.css';
import calendar from 'src/assets/calendar.svg';
import formatDate from 'src/utils/formatDate';
import { useSetCreateStudyState } from 'src/hooks/useReduxState';

function CreateStudyDueDate() {
  const [date, setDate] = useState(new Date());
  const dateHandler = useSetCreateStudyState();

  useEffect(() => {
    const editDate = formatDate(date);
    dateHandler('date', editDate);
  }, [date]);

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">공고마감일</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        {/* custom datepicker css 적용해야 됨......... */}
        <StCreateStudyDueDateWrap>
          <DatePicker
            selected={date}
            onChange={value => {
              setDate(value);
            }}
            showTimeSelect
          />
          <img
            src={calendar}
            alt="달력 이미지"
          />
        </StCreateStudyDueDateWrap>
      </StCreateStudyWrap>
    </StCreateStudyWrap>
  );
}

export default CreateStudyDueDate;
