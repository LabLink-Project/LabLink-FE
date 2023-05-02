import React from 'react';
import SearchHeader from 'src/UI/components/SearchHeader';
import { StCreateStudyTextarea } from 'src/UI/styles/CreateStudy.styled';
import { apiWithJWT } from 'src/api/api';
import { useInput } from 'src/hooks/useInput';
import { fontColors, serviceColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

function Application() {
  const [text, textHandler] = useInput('');
  //   console.log(text);

  const onClickSubmitHandler = () => {
    submitRequest();
  };

  const { id } = useParams();

  //   navigate 커스텀 훅 리팩토링 가능
  const navigate = useNavigate();

  const submitRequest = async () => {
    await apiWithJWT
      .post(`/studies/${id}/applications`, {
        message: text,
      })
      .then(() => alert('지원 완료되었습니다 🙆🏻'))
      .catch(() => alert('오류가 발생했습니다 😥'));

    navigate(-1);
  };

  return (
    <StPaddingWrap>
      <SearchHeader title="지원하기" />
      <StH2>하고 싶은 한마디</StH2>
      <StCreateStudyTextarea
        value={text}
        onChange={textHandler}
        placeholder="10자 이상 입력해주세요."
      />
      <StButton onClick={onClickSubmitHandler}>지원 완료</StButton>
    </StPaddingWrap>
  );
}

const StPaddingWrap = styled.div`
  height: 100vh;
  padding: 20px;
  position: relative;
`;

const StH2 = styled.h2`
  margin: 32px 0 16px;
  ${fontOptions.body2};
  color: ${fontColors.title};
`;

const StButton = styled.button`
  min-width: 335px;

  padding: 17px 0;
  border-radius: 10px;

  background-color: ${serviceColors.primary};
  ${fontOptions.subtitle};

  // style 1
  /* position: absolute;
  left: 20px;
  bottom: 30px; */

  // style 2
  margin-top: 20px;
`;

export default Application;
