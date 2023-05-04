import React, { useEffect } from 'react';
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
import { useCreateStudyState } from 'src/hooks/useReduxState';
import CreateStudyDetailImage from '../molecules/CreateStudyDetailImage';

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

  const study = useCreateStudyState();

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(study);

    // validation object
    for (let key in study) {
      const value = study[key];

      if (value === '') {
        alert('필수 항목의 빈 칸을 채워주세요 🙇🏻‍♂️');
        return;
      }
    }

    // make formdata
    const formData = new FormData();

    for (let key in study) {
      const value = study[key];

      formData.append(key, value);
    }

    apiWithJWT
      .post('/studies', formData)
      .then(() => {
        alert('글 작성이 정상적으로 처리되었습니다 😀');
        navigate('/');
      })
      .catch(err => {
        alert('글 작성이 정상적으로 처리되지 않았습니다 😥');
        console.error(err);
      });
  };

  // 온라인 선택 시 주소 안보이게...
  // 주소 = ONLINE 으로 처리

  return (
    <StContentWrap>
      <SearchHeader title="글 작성" />
      <form>
        <CreateStudyTitle />
        <CreateStudyImage />
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
        <CreateStudyDetailImage />
        <StCreateStudySubmit
          type="submit"
          value="작성 완료"
          onClick={onSubmitHandler}
        />
      </form>
    </StContentWrap>
  );
}

export default CreateStudy;
