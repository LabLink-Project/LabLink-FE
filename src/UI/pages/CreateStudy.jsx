import React, { useEffect, useState } from 'react';
import ModalPortal from 'src/UI/components/Portal';
import { devStyle } from 'src/utils/devStyle';
import Modal from 'src/UI/components/Modal';
import { EmbedPostcode } from './PostcodeTest';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import formatDate from 'src/utils/formatDate';

function CreateStudy() {
  const dateObj = new Date();

  // refactor useInput custom hook
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

  const [dates, setDates] = useState({
    date: dateObj,
    endDate: dateObj,
  });

  useEffect(() => {
    remakeDates('date');
  }, [dates.date]);

  useEffect(() => {
    remakeDates('endDate');
  }, [dates.endDate]);

  const remakeDates = type => {
    const date = formatDate(dates[type]);
    if (type === 'date') {
      setStudy(prevState => ({
        ...prevState,
        date: date,
      }));
    }
    if (type === 'endDate') {
      setStudy(prevState => ({
        ...prevState,
        endDate: date,
      }));
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(dates, study);
    axios
      .post('http://localhost:4000/studys', study)
      .then(res => console.log(res))
      .catch(() => 'axios에서 에러가 발생했습니다');
  };

  // refactor useModal custom hook
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
        <div>
          <label htmlFor="">실험 실행 날짜</label>
          <DatePicker
            selected={dates.date}
            onChange={date => {
              setDates({ ...dates, date: date });
              remakeDates('date');
            }}
            showTimeSelect
          />
        </div>
        <div>
          <label htmlFor="">실험 종료일</label>
          <DatePicker
            selected={dates.endDate}
            onChange={endDate => {
              setDates({ ...dates, endDate: endDate });
              remakeDates('endDate');
            }}
            showTimeSelect
          />
        </div>
        {/* 주소 입력 폼 공부해야됨 */}
        <div>
          <label htmlFor="">주소</label>
          <input
            type="text"
            defaultValue={study.address}
            placeholder="우편번호 검색을 이용해주세요"
            disabled
            // onChange={e => setStudy({ ...study, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="상세 주소를 입력해주세요"
            // onChange={e => setStudy({ ...study, address: e.target.value })}
          />
          <button
            onClick={e => {
              e.preventDefault();
              modalHandler();
            }}
          >
            우편번호 검색
          </button>
          <ModalPortal>
            {isModal && (
              <Modal>
                <EmbedPostcode
                  onClose={modalHandler}
                  onChange={value => setStudy({ ...study, address: value })}
                />
              </Modal>
            )}
          </ModalPortal>
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
          onClick={onSubmitHandler}
        />
      </form>
    </div>
  );
}

export default CreateStudy;
