import React from 'react';
import {
  StCreateStudyAddressInput,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import StudyInput from '../atomics/StudyInput';
import ModalPortal from '../components/Portal';
import Modal from '../components/Modal';
import { EmbedPostcode } from '../pages/PostcodeTest';
import { StBlackButton } from '../styles/Button.styled';
import DaumPostcode from 'react-daum-postcode';

function CreateStudyAddress({ title }) {
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
          //   defaultValue={study.address}
          placeholder="주소검색 버튼을 눌러주세요."
          disabled
          // onChange={e => setStudy({ ...study, address: e.target.value })}
        />
        <StBlackButton
          onClick={e => {
            e.preventDefault();
            // modalHandler();
          }}
        >
          주소검색
        </StBlackButton>
      </div>
      <StudyInput
        type="text"
        placeholder="상세 주소를 입력해주세요."
        // onChange={e => setStudy({ ...study, address: e.target.value })}
      />
      <ModalPortal>
        {/* {isModal && (
          <Modal>
            <EmbedPostcode
              onClose={modalHandler}
              onChange={value => setStudy({ ...study, address: value })}
            />
          </Modal>
        )} */}
      </ModalPortal>
    </StCreateStudyWrap>
  );
}

export default CreateStudyAddress;
