import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import DaumPostcode from 'react-daum-postcode';
import {
  StSignupForm,
  StSignupFormWrap,
  StSignupHeader,
  StSignupInput,
  StSignupInputCondition,
  StSignupInputName,
  StSignupInputWrap,
  StSignupLabel,
  StSignupLapLink,
  StSignupTitle,
} from 'src/UI/styles/Signup.styled';
import { cookies } from 'src/shared/Cookie';
import { URI } from 'src/shared/URIs';
import { api } from 'src/api/api';

function SignupCompany() {
  const nav = useNavigate();

  // 회원가입 state
  const [newCompanies, setNewCompanies] = useState({
    email: '',
    password: '',
    companyName: '',
    ownerName: '',
    business: '',
    managerPhone: '',
    address: '',
    detailAddress: '',
    companyLogo: '',
  });

  // 비밀번호 확인 state
  const [pwCheck, setPwCheck] = useState({
    passwordCk: '',
  });

  // 비밀번호 일치 여부 state
  const [isSamePw, setIsSamePw] = useState('');

  // 모달 열기/닫기 state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 로그인 상태면 못 들어오게 막기
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      alert('이미 로그인 하셨습니다!');
      nav(URI.crud.home);
    }
  }, [cookies]);

  // 회원 정보 onchange
  const signupChangeHandler = e => {
    const { name, value, files } = e.target;
    if (name === 'passwordCk') {
      setPwCheck({ ...pwCheck, [name]: value });
    } else if (name === 'companyLogo') {
      setNewCompanies({ ...newCompanies, [name]: files[0] });
    } else {
      setNewCompanies({ ...newCompanies, [name]: value });
    }
    console.log(files[0]);
  };

  // 이메일 중복 체크
  const emailCheckButton = async () => {
    // email 검사
    const emailRegex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (!emailRegex.test(newCompanies.email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
    } else {
      try {
        const { data } = await api.post('/companies/signup/email-check', {
          email: newCompanies.email,
        });
        alert(data.message);
      } catch (error) {
        if (error.response.status === 409) {
          alert(`${error.response.data.message}`);
        }
      }
    }
  };

  // 비밀번호 일치 확인
  useEffect(() => {
    if (newCompanies.password === '' || pwCheck.passwordCk === '') {
      setIsSamePw('');
    } else if (newCompanies.password !== pwCheck.passwordCk) {
      setIsSamePw('비밀번호가 일치하지 않습니다.');
    } else {
      setIsSamePw('비밀번호가 일치합니다.');
    }
  }, [newCompanies, pwCheck]);

  // 회원정보 유효성 검사
  const validateForm = newCompanies => {
    // email 검사
    const emailRegex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (!emailRegex.test(newCompanies.email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return false;
    }

    // password 검사
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    if (!passwordRegex.test(newCompanies.password)) {
      alert('비밀번호는 영문, 숫자, 특수문자를 포함한 8~20자여야 합니다.');
      return false;
    }

    // password 일치 확인
    if (newCompanies.password !== pwCheck.passwordCk) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    // 휴대폰번호 검사
    const phoneNumberRegex = /^\d{3}\d{3,4}\d{4}$/;
    if (!phoneNumberRegex.test(newCompanies.managerPhone)) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  // 주소 선택 후
  const completeHandler = data => {
    setNewCompanies({ ...newCompanies, address: data.address });
    setShow(false);
  };

  // 회원가입 버튼
  const signupSubmitHandler = async e => {
    e.preventDefault();
    if (validateForm(newCompanies)) {
      try {
        const formData = new FormData();

        for (let key in newCompanies) {
          const value = newCompanies[key];
          formData.append(key, value);
        }

        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/companies/signup`,
          formData
        );

        const { data } = await api.post('/companies/signup', newCompanies);
        
        alert(data.message);
        nav(URI.auth.signup.done);
      } catch (error) {
        if (error.response.status === 409) {
          alert(`${error.response.data.message}`);
        }
      }
    }
  };

  return (
    <>
      <Layout>
        <StSignupHeader>
          <StSignupTitle>
            <StSignupLapLink>LabLink</StSignupLapLink>
            에 오신 고객님 <br />
            환영합니다!
          </StSignupTitle>
        </StSignupHeader>
        <StSignupFormWrap>
          <StSignupForm onSubmit={signupSubmitHandler}>
            <div>
              <StSignupInputWrap>
                <StSignupLabel>
                  <StSignupInputName>이메일</StSignupInputName>
                  <br />
                  <StSignupInput
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={newCompanies.email}
                    onChange={signupChangeHandler}
                    required
                  />
                </StSignupLabel>
                <Button
                  type="button"
                  onClick={emailCheckButton}
                  variant="dark"
                  style={{
                    height: '50px',
                  }}
                >
                  중복확인
                </Button>
              </StSignupInputWrap>
              <StSignupInputCondition>
                이메일 형식으로 입력해주세요
              </StSignupInputCondition>
            </div>
            <div>
              <div>
                <StSignupLabel width={'100%'}>
                  <StSignupInputName>비밀번호</StSignupInputName>
                  <StSignupInput
                    type="password"
                    name="password"
                    placeholder="비밀번호 입력"
                    value={newCompanies.password}
                    onChange={signupChangeHandler}
                    required
                    width={'100%'}
                  />
                </StSignupLabel>
                <StSignupInputCondition>
                  영문, 숫자, 특수문자가 포함된 8~20글자로 <br />
                  입력해주세요
                </StSignupInputCondition>
              </div>
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                <StSignupLabel width={'100%'}>
                  <StSignupInput
                    type="password"
                    name="passwordCk"
                    placeholder="비밀번호 확인"
                    value={pwCheck.passwordCk}
                    onChange={signupChangeHandler}
                    required
                    width={'100%'}
                  />
                </StSignupLabel>
                <StSignupInputCondition>{isSamePw}</StSignupInputCondition>
              </div>
            </div>
            <div>
              <StSignupLabel width={'100%'}>
                <StSignupInputName>전화번호</StSignupInputName>
                <br />
                <StSignupInput
                  type="text"
                  name="managerPhone"
                  placeholder="전화번호 '-'제외하고 입력"
                  value={newCompanies.managerPhone}
                  onChange={signupChangeHandler}
                  required
                  width={'100%'}
                />
              </StSignupLabel>
            </div>
            <div>
              <StSignupLabel width={'100%'}>
                <StSignupInputName>회사/단체명</StSignupInputName>
                <br />
                <StSignupInput
                  type="text"
                  name="companyName"
                  placeholder="회사/단체명 입력"
                  value={newCompanies.companyName}
                  onChange={signupChangeHandler}
                  required
                  width={'100%'}
                />
              </StSignupLabel>
            </div>
            <div>
              <StSignupLabel width={'100%'}>
                <StSignupInputName>업종</StSignupInputName>
                <br />
                <StSignupInput
                  type="text"
                  name="business"
                  placeholder="업종 입력 ex)제약업"
                  value={newCompanies.business}
                  onChange={signupChangeHandler}
                  required
                  width={'100%'}
                />
              </StSignupLabel>
            </div>
            <div>
              <StSignupLabel width={'100%'}>
                <StSignupInputName>대표자명</StSignupInputName>
                <br />
                <StSignupInput
                  type="text"
                  name="ownerName"
                  placeholder="대표자명 입력"
                  value={newCompanies.ownerName}
                  onChange={signupChangeHandler}
                  required
                  width={'100%'}
                />
              </StSignupLabel>
            </div>
            <div>
              <StSignupInputWrap>
                <StSignupLabel>
                  <StSignupInputName>회사/단체 주소</StSignupInputName>
                  <br />
                  <StSignupInput
                    type="text"
                    name="address"
                    placeholder="주소검색 버튼을 눌러주세요"
                    value={newCompanies.address}
                    onChange={signupChangeHandler}
                    required
                  />
                </StSignupLabel>
                <Button
                  type="button"
                  onClick={handleShow}
                  variant="dark"
                  style={{
                    height: '50px',
                  }}
                >
                  주소찾기
                </Button>
              </StSignupInputWrap>
              <Modal
                show={show}
                onHide={handleClose}
              >
                <Modal.Body>
                  <DaumPostcode
                    onComplete={completeHandler}
                    style={{
                      height: '600px',
                    }}
                  />
                </Modal.Body>
              </Modal>
              <br />
              <StSignupInput
                type="text"
                name="detailAddress"
                placeholder="상세주소 입력"
                value={newCompanies.detailAddress}
                onChange={signupChangeHandler}
                required
                width={'100%'}
              />
            </div>
            <div>
              <StSignupLabel width={'100%'}>
                <StSignupInputName>로고</StSignupInputName>
                <br />
                <input
                  type="file"
                  name="companyLogo"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={signupChangeHandler}
                />
              </StSignupLabel>
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                type="submit"
              >
                회원가입
              </Button>
            </div>
          </StSignupForm>
        </StSignupFormWrap>
      </Layout>
    </>
  );
}

export default SignupCompany;
