import React, { useState } from 'react';
import {
  StCreateStudyAddressInput,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';
import { Modal } from 'react-bootstrap';
import { StBlackButton } from '../styles/Button.styled';
import DaumPostcode from 'react-daum-postcode';
import { MyContext } from '../pages/EditPersonalProfile';
import { useContext } from 'react';

function CreateUserAddress({ title, userInfo, setUserInfo, userInfoOnchange }) {
  // 모달 열기/닫기 state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 주소 선택 후
  const completeHandler = data => {
    setUserInfo({ ...userInfo, userAddress: data.address });
    setShow(false);
  };

  return (
    <StCreateStudyWrap>
      <StCreateStudyLabelWrap>
        <StCreateStudyLabel htmlFor="">
          {title ? title : '실험장소'}
        </StCreateStudyLabel>
        <StRequiredInputSpan>*필수</StRequiredInputSpan>
      </StCreateStudyLabelWrap>
      <div>
        <StCreateStudyAddressInput
          type="text"
          name="userAddress"
          placeholder="주소검색 버튼을 눌러주세요."
          value={userInfo.userAddress}
          onChange={()=>
            userInfoOnchange()}
        />
        <StBlackButton
          onClick={e => {
            e.preventDefault();
            handleShow();
          }}
        >
          주소검색
        </StBlackButton>
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
      </div>
      <StudyInput
        type="text"
        name="userDetailAddress"
        placeholder="상세 주소를 입력해주세요."
        value={userInfo.userDetailAddress}
        onChange={userInfoOnchange}
      />
    </StCreateStudyWrap>
  );
}

export default CreateUserAddress;
