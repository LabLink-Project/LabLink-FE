import React, { useEffect, useState } from 'react';
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
import { apiWithJWT } from 'src/api/api';
import { isSignIn } from 'src/hooks/useCheckToken';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CreateStudy() {
  // 하나의 커스텀 훅으로 묶을 수 있지 않을까..????
  // 글 작성, 찜 목록, 내 정보 모두 들어감
  const navigate = useNavigate();
  const accountState = useSelector(state => state);
  const { role } = accountState.accountHandler;

  useEffect(() => {
    if (!isSignIn()) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/auth/signin/user');
    } else if (role === 'USER') {
      alert('기업회원만 작성할 수 있습니다.');
      navigate(-1);
    }
  }, []);

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

  // do refactor later
  // change data format
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
      [type]: date,
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
    apiWithJWT
      .post('/studies', study)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  // refactor useModal custom hook
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => setIsModal(!isModal);

  return (
    <StContentWrap>
      <SearchHeader title="글 작성" />
      <form>
        <CreateStudyTitle state={[study, setStudy]} />
        <CreateStudyCategory state={[study, setStudy]} />
        <CreateStudyAddress state={[study, setStudy]} />
        <CreateStudyDueDate state={[study, setStudy]} />
        <CreateStudyTrialDate state={[study, setStudy]} />
        <CreateStudyPay state={[study, setStudy]} />
        <CreateStudyGender state={[study, setStudy]} />
        <CreateStudyAge state={[study, setStudy]} />
        <CreateStudyBenefit state={[study, setStudy]} />
        <CreateStudyIntro state={[study, setStudy]} />
        <CreateStudyDetail state={[study, setStudy]} />
        <CreateStudyImage state={[study, setStudy]} />

        <StCreateStudySubmit
          type="submit"
          value="작성 완료"
        />
      </form>
    </StContentWrap>
  );
}

export default CreateStudy;
