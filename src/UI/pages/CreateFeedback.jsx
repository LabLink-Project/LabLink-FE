import React from 'react';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';

function CreateFeedback() {
  return (
    <Layout header={'피드백 작성'}>
      <p>피드백을 작성해주세요</p>
      <input
        placeholder="100자 이내로 작성해주세요"
        style={{
          border: '1px solid black',
          borderRadius: '5px',
          padding: '10px 0px 200px 10px',
          marginBottom: '50px',
        }}
      />
      <Button variant="dark">작성하기</Button>
    </Layout>
  );
}

export default CreateFeedback;
