import React, { useEffect, useState } from 'react';
import axios from 'axios';
import formatDate from 'src/utils/formatDate';
import SearchHeader from '../components/SearchHeader';
import CreateStudyTitle from '../molecules/CreateStudyTitle';
import CreateStudyCategory from '../molecules/CreateStudyCategory';
import CreateStudyAddress from '../molecules/CreateStudyAddress';
import CreateStudyDueDate from '../molecules/CreateStudyDueDate';
import CreateStudyTrialDate from '../molecules/CreateStudyTrialDate';
import CreateStudyPay from '../molecules/CreateStudyPay';
import CreateStudyGender from '../molecules/CreateStudyGender';
import CreateStudyAge from '../molecules/CreateStudyAge';
import CreateStudyBenefit from '../molecules/CreateStudyBenefit';
import CreateStudyIntro from '../molecules/CreateStudyIntro';
import CreateStudyDetail from '../molecules/CreateStudyDetail';
import CreateStudyImage from '../molecules/CreateStudyImage';
import { StContentWrap } from '../styles/common.styled';
import { StCreateStudySubmit } from '../styles/CreateStudy.styled';

function CreateStudy() {
  const dateObj = new Date();

  // refactor useInput custom hook
  const [study, setStudy] = useState({
    title: '',
    studyInfo: '',
    studyPurpose: '',
    studyAction: '',
    subjectCount: '',
    category: '',
    date: '',
    address: '',
    pay: '',
    gender: '',
    age: '',
    repeatCount: '',
    endDate: '',
    imageURL: '',
  });

  const [dates, setDates] = useState({
    date: dateObj,
    endDate: dateObj,
  });

  useEffect(() => {
    remakeDates('date');
  }, [dates.date]);

  useEffect(() => {
    remakeDates('endDate');
  }, [dates.endDate]);

  const remakeDates = type => {
    const date = formatDate(dates[type]);
    setStudy(prevState => ({
      ...prevState,
      [date]: date,
    }));

    // if (type === 'date') {
    //   setStudy(prevState => ({
    //     ...prevState,
    //     date: date,
    //   }));
    // }
    // if (type === 'endDate') {
    //   setStudy(prevState => ({
    //     ...prevState,
    //     endDate: date,
    //   }));
    // }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(dates, study);
    axios
      .post('http://localhost:4000/studys', study)
      .then(res => console.log(res))
      .catch(() => 'axios에서 에러가 발생했습니다');
  };

  // refactor useModal custom hook
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => setIsModal(!isModal);

  return (
    <StContentWrap>
      <SearchHeader title="글 작성" />
      <form>
        <CreateStudyTitle />
        <CreateStudyCategory />
        <CreateStudyAddress />
        <CreateStudyDueDate />
        <CreateStudyTrialDate />
        <CreateStudyPay />
        <CreateStudyGender />
        <CreateStudyAge />
        <CreateStudyBenefit />
        <CreateStudyIntro />
        <CreateStudyDetail />
        <CreateStudyImage />

        <StCreateStudySubmit
          type="submit"
          value="작성 완료"
        />
      </form>
    </StContentWrap>
  );
}

export default CreateStudy;
