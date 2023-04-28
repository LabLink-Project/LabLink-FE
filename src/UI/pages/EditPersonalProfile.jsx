import React, { createContext, useEffect, useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StEditPersonalProfileButton,
  StEditPersonalProfileChangeInfoInput,
  StEditPersonalProfileCheckDiv,
  StEditPersonalProfileCheckPw,
  StEditPersonalProfileDate,
  StEditPersonalProfileDateWrap,
  StEditPersonalProfileFixedButton,
  StEditPersonalProfileH2,
  StEditPersonalProfileInput,
  StEditPersonalProfilePwWrap,
  StEditPersonalProfileTitle,
  StEditPersonalProfileValidationMessage,
  StEditPersonalProfileWrap,
  StEditPersonalProfileYear,
} from '../styles/EditPersonalProfile.styled';
import { StFlexBox } from '../styles/common.styled';
import { StTopButton } from '../styles/TopButton.styled';
import CreateStudyAddress from '../molecules/CreateStudyAddress';
import { StCreateStudyAddressInput } from '../styles/CreateStudy.styled';
import { StBlackButton } from '../styles/Button.styled';
import { Button } from 'react-bootstrap';
import { cookies } from 'src/shared/Cookie';
import { api } from 'src/api/api';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'bootstrap';
import CreateUserAddress from '../molecules/CreateUserAddress';

export const MyContext = createContext();

function EditPersonalProfile() {
  const token = cookies.get('token');

  // 비밀번호 확인 state
  const [pwCheck, setPwCheck] = useState({
    password: '',
  });

  // 비밀번호 확인 결과 state
  const [pwStatus, setPwStatus] = useState(false);

  // 내 정보 수정 tap state
  const [myProfile, setMyProfile] = useState(true);

  // 유저 정보 state
  const [userInfo, setUserInfo] = useState({
    userName: '',
    dateOfBirth: '',
    userGender: '',
    userPhone: '',
    userPhoneCheck: '',
    userAddress: '',
    userDetailAddress: '',
  });

  // 비밀번호 변경 state
  const [changePw, setChangePw] = useState({
    password: '',
    passwordCheck: '',
  });

  // 비밀번호 확인 onchange
  const pwCheckOnchange = e => {
    const { name, value } = e.target;
    setPwCheck({ ...pwCheck, [name]: value });
  };

  // 유저정보 onchange
  const userInfoOnchange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 비밀번호 변경 onchange
  const changePwOnchange = e => {
    const { name, value } = e.target;
    setChangePw({ ...changePw, [name]: value });
  };

  // 비밀번호 확인 onsubmit
  const pwCheckSubmit = async e => {
    e.preventDefault();
    try {
      await api.post(
        '/users/check',
        {
          password: pwCheck.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('비밀번호 확인을 완료하였습니다.');
      setPwStatus(true);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  // 내 정보 유효성 검사
  const validateForm = userInfo => {
    // 이름 검사
    const userNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]{2,5}$/;
    if (!userNameRegex.test(userInfo.userName)) {
      alert('올바른 이름을 입력해주세요');
      return false;
    }

    // 생년월일 검사
    const userBirthRegex =
      /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
    if (!userBirthRegex.test(userInfo.dateOfBirth)) {
      alert('올바른 생년월일을 입력해주세요');
      return false;
    }

    // 휴대폰번호 검사
    const phoneNumberRegex = /^\d{3}\d{3,4}\d{4}$/;
    if (!phoneNumberRegex.test(userInfo.userPhone)) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  // 내 정보 수정완료 버튼
  const editCompletionSubmit = async e => {
    e.preventDefault();
    if (validateForm(userInfo)) {
      try {
        await api.patch('/users/check/modifyProfile', userInfo, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        alert(`${error.response.data.message}`);
      }
    }
  };

  // 비밀번호 변경 유효성 검사
  const validPwForm = changePw => {
    // password 검사
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    if (!passwordRegex.test(changePw.password)) {
      alert(
        '비밀번호는 영문, 숫자, 특수문자($@$!%*#?&)를 포함한 8~20자여야 합니다.'
      );
      return false;
    }

    // password 일치 확인
    if (changePw.password !== changePw.passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    return true;
  };

  // 비밀번호 변경 onsubmit
  const changePwSubmit = async e => {
    e.preventDefault();
    if (validPwForm(changePw)) {
      try {
        const { data } = await api.patch(
          '/users/check/changePassword',
          changePw,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(data.message);
      } catch (error) {
        alert(`${error.response.data.message}`);
      }
    }
  };

  return (
    <StEditPersonalProfileWrap>
      <SearchHeader title="내 정보 수정" />
      {!pwStatus ? (
        <>
          {/* 비밀번호 체크 */}
          <StEditPersonalProfilePwWrap>
            <form onSubmit={pwCheckSubmit}>
              <StEditPersonalProfileH2>비밀번호 확인</StEditPersonalProfileH2>
              <StEditPersonalProfileInput
                type="password"
                name="password"
                placeholder="비밀번호 입력"
                value={pwCheck.password}
                onChange={pwCheckOnchange}
                required
              />
              <StEditPersonalProfileValidationMessage>
                {/* 비밀번호가 일치하지 않습니다 */}
              </StEditPersonalProfileValidationMessage>
              <div
                className="d-grid gap-2"
                style={{
                  marginTop: '500px',
                }}
              >
                <Button
                  variant="dark"
                  size="lg"
                  type="submit"
                >
                  비밀번호 확인
                </Button>
              </div>
            </form>
          </StEditPersonalProfilePwWrap>
        </>
      ) : (
        <>
          {/* 내 정보 수정 */}
          <StFlexBox>
            <StTopButton
              onClick={() => setMyProfile(true)}
              style={{
                minWidth: '50%',
              }}
            >
              내 정보 수정
            </StTopButton>
            <StTopButton
              onClick={() => setMyProfile(false)}
              style={{
                minWidth: '50%',
              }}
            >
              비밀번호 변경
            </StTopButton>
          </StFlexBox>
          {myProfile ? (
            <form onSubmit={editCompletionSubmit}>
              <div>
                <StEditPersonalProfileTitle>이름</StEditPersonalProfileTitle>
                <StEditPersonalProfileChangeInfoInput
                  type="text"
                  name="userName"
                  placeholder="이름을 입력해 주세요."
                  value={userInfo.userName}
                  onChange={userInfoOnchange}
                />
              </div>
              <div>
                <StEditPersonalProfileTitle>
                  생년월일
                </StEditPersonalProfileTitle>
                <StEditPersonalProfileDateWrap>
                  <StEditPersonalProfileYear
                    type="text"
                    name="dateOfBirth"
                    placeholder="생년월일을 입력해주세요 ex) 2023.04.01"
                    value={userInfo.dateOfBirth}
                    onChange={userInfoOnchange}
                  />
                  {/* <StEditPersonalProfileDate type="number" />
                  <StEditPersonalProfileDate type="number" /> */}
                </StEditPersonalProfileDateWrap>
              </div>
              <div>
                <StEditPersonalProfileTitle>성별</StEditPersonalProfileTitle>
                <StEditPersonalProfileDateWrap>
                  <StEditPersonalProfileButton
                    type="button"
                    name="userGender"
                    value="남자"
                    onClick={userInfoOnchange}
                  />
                  <StEditPersonalProfileButton
                    type="button"
                    name="userGender"
                    value="여자"
                    onClick={userInfoOnchange}
                  />
                </StEditPersonalProfileDateWrap>
              </div>
              <div>
                <StEditPersonalProfileTitle>
                  휴대폰 번호
                </StEditPersonalProfileTitle>
                <StCreateStudyAddressInput
                  type="text"
                  name="userPhone"
                  placeholder="휴대폰 번호 - 제외하고 입력"
                  value={userInfo.userPhone}
                  onChange={userInfoOnchange}
                />
                <StBlackButton>인증번호</StBlackButton>
                <StEditPersonalProfileCheckDiv>
                  인증번호가 전송되었습니다
                </StEditPersonalProfileCheckDiv>
                <StCreateStudyAddressInput
                  type="text"
                  name="userPhoneCheck"
                  placeholder="인증번호 입력"
                  value={userInfo.userPhoneCheck}
                  onChange={userInfoOnchange}
                />
                <StBlackButton>확인</StBlackButton>
                <StEditPersonalProfileCheckDiv>
                  인증번호가 일치하지 않습니다
                </StEditPersonalProfileCheckDiv>
              </div>
              <CreateUserAddress
                title="주소"
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                userInfoOnchange={userInfoOnchange}
              />
              <div className="d-grid gap-2">
                <Button
                  variant="dark"
                  size="lg"
                  type="submit"
                >
                  수정완료
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={changePwSubmit}>
              {/* 비밀번호 변경 */}
              <div>
                <StEditPersonalProfileTitle>
                  비밀번호 변경
                </StEditPersonalProfileTitle>
                <StEditPersonalProfileCheckPw
                  type="password"
                  name="password"
                  placeholder="비밀번호 입력"
                  value={changePw.password}
                  onChange={changePwOnchange}
                />
                <StEditPersonalProfileCheckDiv>
                  영문, 숫자, 특수문자가 포함된 8~20글자로 입력해주세요
                </StEditPersonalProfileCheckDiv>
                <StEditPersonalProfileCheckPw
                  type="password"
                  name="passwordCheck"
                  placeholder="비밀번호 확인"
                  value={changePw.passwordCheck}
                  onChange={changePwOnchange}
                />
                {/* <StEditPersonalProfileCheckDiv>
                  {isSamePw}
                </StEditPersonalProfileCheckDiv> */}
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="dark"
                  size="lg"
                  type="submit"
                >
                  수정완료
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </StEditPersonalProfileWrap>
  );
}

export default EditPersonalProfile;
