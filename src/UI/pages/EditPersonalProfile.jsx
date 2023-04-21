import React, { useState } from 'react';
import SearchHeader from '../components/SearchHeader';
import {
  StEditPersonalProfileButton,
  StEditPersonalProfileChangeInfoInput,
  StEditPersonalProfileCheckDiv,
  StEditPersonalProfileCheckPw,
  StEditPersonalProfileDate,
  StEditPersonalProfileDateWrap,
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
import axios from 'axios';
import { cookies } from 'src/shared/Cookie';

function EditPersonalProfile() {
  const token = cookies.get('token');

  // 비밀번호 확인 state
  const [pwCheck, setPwCheck] = useState({
    password: '',
  });

  // 유저 정보 state
  const [userInfo, setUserInfo] = useState({
    userName: '',
    dateOfBirth: '',
    userGender: '',
    userPhone: '',
    userAddress: '',
  });

  // 비밀번호 확인 결과 state
  const [pwStatus, setPwStatus] = useState(true);

  // 내 정보 수정 tap state
  const [myProfile, setMyProfile] = useState(true);

  // 비밀번호 확인 onchange
  const pwCheckOnchange = e => {
    const { name, value } = e.target;
    setPwCheck({ ...pwCheck, [name]: value });
  };

  // 유저정보 onchange
  const userInfoOnchange = e => {
    const { name, value } = e.target;
    setPwCheck({ ...userInfo, [name]: value });
  };

  // 비밀번호 확인 onsubmit
  const pwCheckSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/check`,
        {
          password: pwCheck.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPwStatus(true);
    } catch (error) {
      alert(`${error.response.data.message}`);
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
                비밀번호가 일치하지 않습니다
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
            <>
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
                  <StEditPersonalProfileYear type="number" />
                  <StEditPersonalProfileDate type="number" />
                  <StEditPersonalProfileDate type="number" />
                </StEditPersonalProfileDateWrap>
              </div>
              <div>
                <StEditPersonalProfileTitle>성별</StEditPersonalProfileTitle>
                <StEditPersonalProfileDateWrap>
                  <StEditPersonalProfileButton
                    type="button"
                    value="남자"
                  />
                  <StEditPersonalProfileButton
                    type="button"
                    value="여자"
                  />
                </StEditPersonalProfileDateWrap>
              </div>
              <div>
                <StEditPersonalProfileTitle>
                  휴대폰 번호
                </StEditPersonalProfileTitle>
                <StCreateStudyAddressInput
                  type="text"
                  //   defaultValue={study.address}
                  placeholder="휴대폰 번호 - 제외하고 입력"
                  disabled
                  // onChange={e => setStudy({ ...study, address: e.target.value })}
                />

                <StBlackButton
                  onClick={e => {
                    e.preventDefault();
                    // modalHandler();
                  }}
                >
                  인증번호
                </StBlackButton>
                <StEditPersonalProfileCheckDiv>
                  인증번호가 전송되었습니다
                </StEditPersonalProfileCheckDiv>
                <StCreateStudyAddressInput
                  type="text"
                  //   defaultValue={study.address}
                  placeholder="인증번호 입력"
                  disabled
                  // onChange={e => setStudy({ ...study, address: e.target.value })}
                />

                <StBlackButton
                  onClick={e => {
                    e.preventDefault();
                    // modalHandler();
                  }}
                >
                  확인
                </StBlackButton>
                <StEditPersonalProfileCheckDiv>
                  인증번호가 일치하지 않습니다
                </StEditPersonalProfileCheckDiv>
              </div>
              <CreateStudyAddress title="주소" />
              <div className="d-grid gap-2">
                <Button
                  variant="dark"
                  size="lg"
                >
                  수정완료
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* 비밀번호 변경 */}
              <div>
                <StEditPersonalProfileTitle>
                  비밀번호 변경
                </StEditPersonalProfileTitle>
                <StEditPersonalProfileCheckPw
                  type="text"
                  placeholder="비밀번호 입력"
                />
                <StEditPersonalProfileCheckDiv>
                  비밀번호는 대/소문자, 숫자, 특수문자를 포함해 주세요
                </StEditPersonalProfileCheckDiv>
                <StEditPersonalProfileCheckPw
                  type="text"
                  placeholder="패스워드 확인"
                />
                <StEditPersonalProfileCheckDiv>
                  비밀번호가 일치하지 않습니다
                </StEditPersonalProfileCheckDiv>
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="dark"
                  size="lg"
                >
                  수정완료
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </StEditPersonalProfileWrap>
  );
}

export default EditPersonalProfile;
