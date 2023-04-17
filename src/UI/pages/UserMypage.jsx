import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function UserMypage() {
  const [open, setOpen] = useState(false);

  return (
    <Layout header={'마이페이지'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>안녕하세요 ***님</h2>
        <Link>내 정보 수정</Link>
      </div>
      <div
        style={{
          backgroundColor: 'green',
          height: '150px',
        }}
      >
        나의 온도
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>
          <p
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            내 실험 관리
          </p>
          <Collapse in={open}>
            <div>
              <div
                style={{
                  marginLeft: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}
              >
                <Link
                  id="example-collapse-text"
                  to="/user/mystudy"
                >
                  - 내가 신청한 실험
                </Link>
                <Link id="example-collapse-text">- 진행할 실험</Link>
                <Link id="example-collapse-text">- 완료한 실험</Link>
              </div>
            </div>
          </Collapse>
        </div>
        <p>신청서 작성</p>
        <p>설정</p>
      </div>
    </Layout>
  );
}

export default UserMypage;
