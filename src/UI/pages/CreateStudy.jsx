import React, { useState } from 'react';
import { devStyle } from 'src/utils/devStyle';

import Modal from 'src/UI/components/Modal';
import ModalPortal from 'src/UI/components/Portal';

function CreateStudy() {
  const [study, setStudy] = useState({
    title: '',
    studyInfo: '',
    studyPurpose: '',
    studyAction: '',
    subjectCount: '',
    category: '',
    date: '',
    address: '',
    pay: '',
    gender: '',
    age: '',
    repeatCount: '',
    endDate: '',
    imageURL: '',
  });

  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => setIsModal(!isModal);

  return (
    <div style={devStyle}>
      <form>
        {/* 제목 */}
        <div>
          <label htmlFor="">제목</label>
          <input
            type="text"
            value={study.title}
            onChange={e => setStudy({ ...study, title: e.target.value })}
          />
        </div>
        {/* 실험 소개 */}
        <div>
          <label htmlFor="">연구 소개</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={study.studyInfo}
            onChange={e => setStudy({ ...study, studyInfo: e.target.value })}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">연구 목적</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={study.studyPurpose}
            onChange={e => setStudy({ ...study, studyPurpose: e.target.value })}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">실험 진행 방법</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={study.studyAction}
            onChange={e => setStudy({ ...study, studyAction: e.target.value })}
          ></textarea>
        </div>
        {/* 간단한 실험 관련 정보 */}
        <div>
          <label htmlFor="">모집 인원</label>
          <input
            type="number"
            value={study.subjectCount}
            onChange={e => setStudy({ ...study, subjectCount: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">카테고리</label>
          <input
            type="text"
            value={study.category}
            onChange={e => setStudy({ ...study, category: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">보수</label>
          <input
            type="number"
            value={study.pay}
            onChange={e => setStudy({ ...study, pay: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">실험 진행 횟수</label>
          <input
            type="number"
            value={study.repeatCount}
            onChange={e => setStudy({ ...study, repeatCount: e.target.value })}
          />
        </div>
        {/* 따로 받아야할 실험 관련 정보 */}
        {/* 예외처리 필요 : 실험 종료 > 실행 */}
        {/* 날짜 한 개의 폼에서 두 번 받기 */}
        <div>
          <label htmlFor="">실험 실행 날짜</label>
          <input
            type="date"
            value={study.date}
            onChange={e => setStudy({ ...study, date: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">실험 종료일</label>
          <input
            type="date"
            value={study.endDate}
            onChange={e => setStudy({ ...study, endDate: e.target.value })}
          />
        </div>
        {/* 주소 입력 폼 공부해야됨 */}
        <div>
          <label htmlFor="">주소</label>
          <input
            type="text"
            value={study.address}
            onChange={e => setStudy({ ...study, address: e.target.value })}
            defaultValue={study.address}
            // onChange={e => setStudy({ ...study, address: e.target.value })}
          />

          <ModalPortal>{isModal && <Modal></Modal>}</ModalPortal>
        </div>

        {/* 피실험자 정보 */}
        <fieldset>
          <legend>성별</legend>
          <label htmlFor="man">남자</label>
          <input
            id="man"
            type="radio"
            name="gender"
            value="man"
            onChange={e => setStudy({ ...study, gender: e.target.value })}
          />
          <label htmlFor="woman">여자</label>
          <input
            id="woman"
            type="radio"
            name="gender"
            value="woman"
            onChange={e => setStudy({ ...study, gender: e.target.value })}
          />
        </fieldset>
        {/* 고민해봐야 할듯 최소 최대 결정,, */}
        <div>
          <label htmlFor="">나이</label>
          <input
            type="range"
            value={study.age}
            onChange={e => setStudy({ ...study, age: e.target.value })}
            min="20"
            max="40"
          />
          <span>{study.age}</span>
        </div>
        {/* 이미지..... */}
        {/* 얘는 formdata로 처리 필요 */}
        <div>
          <label htmlFor="">이미지</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setStudy({ ...study, imageURL: e.target.files[0] })}
          />
        </div>
        <input
          type="submit"
          value="제출"
          onClick={e => {
            e.preventDefault();
            console.log(study);
          }}
        />
      </form>
    </div>
  );
}
export default CreateStudy;
