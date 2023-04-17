import React, { useState } from 'react';
import {
  StCreateStudyDueDateWrap,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from 'src/assets/calendar.svg';

function CreateStudyTrialDate() {
  const [dates, setDates] = useState({
    date: new Date(),
    endDate: new Date(),
  });
  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">실험진행일</StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <StCreateStudyWrap>
        <StCreateStudyDueDateWrap>
          <DatePicker
            selected={dates.date}
            onChange={date => {
              setDates({ ...dates, date: date });
              // remakeDates('date');
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

export default CreateStudyTrialDate;
