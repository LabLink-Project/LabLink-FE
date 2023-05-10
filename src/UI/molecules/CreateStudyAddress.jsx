import React, { useEffect, useState } from 'react';
import {
  StCreateStudyAddressInput,
  StCreateStudyLabel,
  StCreateStudyLabelWrap,
  StCreateStudyWrap,
  StRequiredInputSpan,
} from '../styles/CreateStudy.styled';
import ModalPortal from '../components/Portal';
import Modal from '../components/Modal';
import { EmbedPostcode } from '../pages/PostcodeTest';
import { StBlackButton } from '../styles/Button.styled';
import {
  useCreateStudyState,
  useSetCreateStudyState,
} from 'src/hooks/useReduxState';

function CreateStudyAddress() {
  const category = useCreateStudyState('category');

  const [address, setAddress] = useState('');

  // refactor useModal custom hook
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => setIsModal(!isModal);

  const handler = useSetCreateStudyState();

  useEffect(() => {
    handler('address', address);
  }, [address]);

  useEffect(() => {
    if (category === 'ONLINE') handler('address', 'ONLINE');
  }, [category]);

  // const [detailAddress, setDetailAddress] = useState('');

  return (
    <>
      {category !== 'ONLINE' ? (
        <StCreateStudyWrap>
          <StCreateStudyLabelWrap>
            <StCreateStudyLabel htmlFor="">실험장소</StCreateStudyLabel>
            <StRequiredInputSpan>*필수</StRequiredInputSpan>
          </StCreateStudyLabelWrap>
          <div>
            <StCreateStudyAddressInput
              type="text"
              defaultValue={address}
              placeholder="주소검색 버튼을 눌러주세요."
              disabled
              onChange={e => setAddress(e.target.value)}
            />
            <StBlackButton
              onClick={e => {
                e.preventDefault();
                modalHandler();
              }}
            >
              주소검색
            </StBlackButton>
          </div>
          {/* <StudyInput
      type="text"
      placeholder="상세 주소를 입력해주세요."
      value={detailAddress}
      onChange={e => {
        setDetailAddress(e.target.value);
      }}
    /> */}
          <ModalPortal>
            {isModal && (
              <Modal>
                <EmbedPostcode
                  onClose={modalHandler}
                  onChange={value => {
                    setAddress(value);
                  }}
                />
              </Modal>
            )}
          </ModalPortal>
        </StCreateStudyWrap>
      ) : (
        ''
      )}
    </>
  );
}

export default CreateStudyAddress;
