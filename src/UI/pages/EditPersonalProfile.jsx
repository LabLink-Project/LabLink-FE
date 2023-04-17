import React from 'react';
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

function EditPersonalProfile() {
  return (
    <StEditPersonalProfileWrap>
      <SearchHeader title="내 정보 수정" />
      {/* 비밀번호 체크 */}
      <StEditPersonalProfilePwWrap>
        <StEditPersonalProfileH2>비밀번호 확인</StEditPersonalProfileH2>
        <StEditPersonalProfileInput
          type="text"
          placeholder="비밀번호 입력"
        />
        <StEditPersonalProfileValidationMessage>
          비밀번호가 일치하지 않습니다
        </StEditPersonalProfileValidationMessage>
      </StEditPersonalProfilePwWrap>
      {/* 내 정보 수정 */}
      <StFlexBox>
        <StTopButton>내 정보 수정</StTopButton>
        <StTopButton>비밀번호 변경</StTopButton>
      </StFlexBox>
      <div>
        <StEditPersonalProfileTitle>이름</StEditPersonalProfileTitle>
        <StEditPersonalProfileChangeInfoInput
          type="text"
          placeholder="이름을 입력해 주세요."
        />
      </div>
      <div>
        <StEditPersonalProfileTitle>생년월일</StEditPersonalProfileTitle>
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
        <StEditPersonalProfileTitle>휴대폰 번호</StEditPersonalProfileTitle>
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
      {/* 비밀번호 변경 */}
      <div>
        <StEditPersonalProfileTitle>비밀번호 변경</StEditPersonalProfileTitle>
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
    </StEditPersonalProfileWrap>
  );
}

export default EditPersonalProfile;
