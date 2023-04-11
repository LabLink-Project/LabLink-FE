import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

function SignupCompany() {
  const nav = useNavigate();

  // 모두 동의 state
  const [allAgreed, setAllAgreed] = useState(false);

  // 동의 후 보여질 form
  const [showForm, setShowForm] = useState(false);

  // 회원가입 state
  const [newUsers, setNewUsers] = useState({
    email: '',
    password: '',
    userPhone: '',
    phoneCheck: '',
    ageCheck: false,
    termsOfServiceAgreement: false,
    privacyPolicyConsent: false,
    sensitiveInfoConsent: false,
    marketingOptIn: false,
  });

  // 비밀번호 확인 state
  const [pwCheck, setPwCheck] = useState({
    passwordCk: '',
  });

  // 비밀번호 일치 여부 state
  const [isSamePw, setIsSamePw] = useState('');

  // 모두 동의 체크박스 onchange
  const handleAllAgreementChange = e => {
    const { checked } = e.target;
    setAllAgreed(checked);
    setNewUsers({
      ...newUsers,
      ageCheck: checked,
      termsOfServiceAgreement: checked,
      privacyPolicyConsent: checked,
      sensitiveInfoConsent: checked,
      marketingOptIn: checked,
    });
  };

  // 필수, 선택 체크박스 onchange
  const handleAgreementChange = e => {
    const { name, checked } = e.target;
    setNewUsers({ ...newUsers, [name]: checked });
  };

  // 개별로 동의 박스 건드렸을때
  useEffect(() => {
    if (
      newUsers.ageCheck &&
      newUsers.termsOfServiceAgreement &&
      newUsers.privacyPolicyConsent &&
      newUsers.sensitiveInfoConsent &&
      newUsers.marketingOptIn
    ) {
      setAllAgreed(true);
    } else {
      setAllAgreed(false);
    }
  }, [newUsers]);

  // 동의하고싶은 약관 선택 후 클릭하는 버튼
  const onClickAgreement = e => {
    if (
      newUsers.ageCheck === false ||
      newUsers.termsOfServiceAgreement === false ||
      newUsers.privacyPolicyConsent === false ||
      newUsers.sensitiveInfoConsent === false
    ) {
      alert('모든 필수 약관에 동의하셔야합니다');
    } else {
      setShowForm(true);
    }
  };

  // 회원 정보 onchange
  const signupChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'passwordCk') {
      setPwCheck({ ...pwCheck, [name]: value });
    } else {
      setNewUsers({ ...newUsers, [name]: value });
    }
  };

  // 이메일 중복 체크
  const emailCheckButton = async () => {
    // email 검사
    const emailRegex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (!emailRegex.test(newUsers.email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
    } else {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/users/signup/email-check`,
          { email: newUsers.email }
        );
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
    if (newUsers.password === '' || pwCheck.passwordCk === '') {
      setIsSamePw('');
    } else if (newUsers.password !== pwCheck.passwordCk) {
      setIsSamePw('비밀번호가 일치하지 않습니다.');
    } else {
      setIsSamePw('비밀번호가 일치합니다.');
    }
  }, [newUsers, pwCheck]);

  // 회원정보 유효성 검사
  const validateForm = newUsers => {
    // email 검사
    const emailRegex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (!emailRegex.test(newUsers.email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return false;
    }

    // password 검사
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    if (!passwordRegex.test(newUsers.password)) {
      alert('비밀번호는 영문, 숫자, 특수문자를 포함한 8~20자여야 합니다.');
      return false;
    }

    // password 일치 확인
    if (newUsers.password !== pwCheck.passwordCk) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    // 휴대폰번호 검사
    const phoneNumberRegex = /^\d{3}\d{3,4}\d{4}$/;
    if (!phoneNumberRegex.test(newUsers.userPhone)) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  // 회원가입 버튼
  const signupSubmitHandler = async e => {
    e.preventDefault();
    if (validateForm(newUsers)) {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/users/signup`,
          newUsers
        );
        alert(data.message);
        nav('/login/user');
      } catch (error) {
        if (error.response.status === 409) {
          alert(`${error.response.data.message}`);
        }
      }
    }
  };

  return (
    <>
      {!showForm ? (
        <Layout>
          <div
            style={{
              margin: '16px 0',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '35px',
                }}
              >
                LabLink
              </span>
              에 오신 고객님 <br />
              환영합니다!
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              margin: '24px 0',
            }}
          >
            <div
              style={{
                fontSize: '20px',
              }}
            >
              회원가입을 위해
              <br />
              약관에 동의해주세요
            </div>
            <div>
              <Link
                to="/signup/user/terms"
                style={{
                  color: 'gray',
                  fontSize: '15px',
                }}
              >
                약관 읽기
              </Link>
            </div>
          </div>
          <div>
            <label
              style={{
                marginBottom: '48px',
                marginLeft: '22px',
                display: 'flex',
                // flexDirection: 'row',
              }}
            >
              <input
                type="checkbox"
                name="all"
                checked={allAgreed}
                onChange={handleAllAgreementChange}
              />
              &nbsp; 모두 동의
            </label>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <label>
                    <input
                      type="checkbox"
                      name="termsOfServiceAgreement"
                      checked={newUsers.termsOfServiceAgreement}
                      onChange={handleAgreementChange}
                    />{' '}
                    <span
                      style={{
                        color: 'red',
                        font: 'bold',
                      }}
                    >
                      (필수)
                    </span>{' '}
                    서비스 이용약관 동의&nbsp;
                  </label>
                </Accordion.Header>
                <Accordion.Body>약관 내용</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <label>
                    <input
                      type="checkbox"
                      name="privacyPolicyConsent"
                      checked={newUsers.privacyPolicyConsent}
                      onChange={handleAgreementChange}
                    />{' '}
                    <span
                      style={{
                        color: 'red',
                        font: 'bold',
                      }}
                    >
                      (필수)
                    </span>{' '}
                    개인정보 처리방침 동의&nbsp;
                  </label>
                </Accordion.Header>
                <Accordion.Body>약관 내용</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <label>
                    <input
                      type="checkbox"
                      name="sensitiveInfoConsent"
                      checked={newUsers.sensitiveInfoConsent}
                      onChange={handleAgreementChange}
                    />{' '}
                    <span
                      style={{
                        color: 'red',
                        font: 'bold',
                      }}
                    >
                      (필수)
                    </span>{' '}
                    문자서비스 이용약관 동의&nbsp;
                  </label>
                </Accordion.Header>
                <Accordion.Body>약관 내용</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <label>
                    <input
                      type="checkbox"
                      name="marketingOptIn"
                      checked={newUsers.marketingOptIn}
                      onChange={handleAgreementChange}
                    />{' '}
                    (선택) 마케팅 수신동의
                  </label>
                </Accordion.Header>
                <Accordion.Body>약관 내용</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div
              className="d-grid gap-2"
              style={{
                marginTop: '72px',
              }}
            >
              <Button
                variant="dark"
                size="lg"
                onClick={onClickAgreement}
              >
                동의
              </Button>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div
            style={{
              margin: '16px 0',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '35px',
                }}
              >
                LabLink
              </span>
              에 오신 고객님 <br />
              환영합니다!
            </h2>
          </div>
          <div
            style={{
              marginTop: '16px',
            }}
          >
            <form
              onSubmit={signupSubmitHandler}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div>
                <label>
                  이메일
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={newUsers.email}
                    onChange={signupChangeHandler}
                    required
                    style={{
                      height: '100',
                    }}
                  />
                </label>
                <button
                  type="button"
                  onClick={emailCheckButton}
                >
                  중복확인
                </button>
                <br />
                <span>이메일 형식으로 입력해주세요</span>
              </div>
              <div>
                <div>
                  <label>
                    비밀번호
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="비밀번호 입력"
                      value={newUsers.password}
                      onChange={signupChangeHandler}
                      required
                    />
                  </label>
                  <br />
                  <span>
                    영문, 숫자, 특수문자가 포함된 8~20글자로 입력해주세요
                  </span>
                </div>
                <div>
                  <label>
                    <input
                      type="password"
                      name="passwordCk"
                      placeholder="비밀번호 확인"
                      value={pwCheck.passwordCk}
                      onChange={signupChangeHandler}
                      required
                    />
                  </label>
                  <br />
                  {isSamePw}
                </div>
              </div>
              <div>
                <div>
                  <label>
                    휴대폰 번호
                    <br />
                    <input
                      type="text"
                      name="userPhone"
                      placeholder="휴대폰 번호 '-'제외하고 입력"
                      value={newUsers.userPhone}
                      onChange={signupChangeHandler}
                      required
                      style={{
                        width: '250px',
                      }}
                    />
                  </label>
                  <button type="button">인증번호</button>
                </div>
                <div>
                  <label>
                    <input
                      type="text"
                      name="phoneCheck"
                      placeholder="인증번호 입력"
                      value={newUsers.phoneCheck}
                      onChange={signupChangeHandler}
                      required
                    />
                  </label>
                  <button type="button">확인</button>
                </div>
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
            </form>
          </div>
        </Layout>
      )}
    </>
  );
}

export default SignupCompany;
