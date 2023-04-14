import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import DaumPostcode from 'react-daum-postcode';

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

  // 회원 정보 onchange
  const signupChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'passwordCk') {
      setPwCheck({ ...pwCheck, [name]: value });
    } else {
      setNewCompanies({ ...newCompanies, [name]: value });
    }
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
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/companies/signup/email-check`,
          { email: newCompanies.email }
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
        const { data } = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/companies/signup`,
          newCompanies
        );
        alert(data.message);
        nav('/signup/success');
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
                  value={newCompanies.email}
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
                    value={newCompanies.password}
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
              <label>
                전화번호
                <br />
                <input
                  type="text"
                  name="managerPhone"
                  placeholder="전화번호 '-'제외하고 입력"
                  value={newCompanies.managerPhone}
                  onChange={signupChangeHandler}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                회사/단체명
                <br />
                <input
                  type="text"
                  name="companyName"
                  placeholder="회사/단체명 입력"
                  value={newCompanies.companyName}
                  onChange={signupChangeHandler}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                대표자명
                <br />
                <input
                  type="text"
                  name="ownerName"
                  placeholder="대표자명 입력"
                  value={newCompanies.ownerName}
                  onChange={signupChangeHandler}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                회사/단체 주소
                <br />
                <input
                  type="text"
                  name="address"
                  placeholder="주소검색 버튼을 눌러주세요"
                  value={newCompanies.address}
                  onChange={signupChangeHandler}
                  required
                />
              </label>
              <button onClick={handleShow}>주소찾기</button>
              <Modal
                show={show}
                onHide={handleClose}
              >
                <Modal.Body
                  style={{
                    height: '600px',
                  }}
                >
                  <DaumPostcode onComplete={completeHandler} />
                </Modal.Body>
              </Modal>

              <br />
              <input
                type="text"
                // name="addressdatail"
                placeholder="상세주소 입력"
                // value={newCompanies.address}
                // onChange={signupChangeHandler}
                // required
              />
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
    </>
  );
}

export default SignupCompany;
