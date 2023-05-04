import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'src/api/api';
import { cookies } from 'src/shared/Cookie';
import Layout from '../components/Layout';
import { StFeedbackBox } from '../styles/ReadFeedback.styled';

function ReadFeedback() {
  const studyId = useParams();

  const token = cookies.get('token');

  const [feedbacks, setFeedbacks] = useState();

  const getFeedbacks = async () => {
    try {
      const { data } = await api.get(`/studies/${studyId.id}/feedback`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFeedbacks(data.data);
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <Layout header={'피드백 확인'}>
      {feedbacks?.map(feedback => {
        return (
          <StFeedbackBox key={feedback.id}>
            <p>
              {feedback.userName}&nbsp;
              {feedback.userGender}
            </p>
            <p>{feedback.feedbackMessage}</p>
          </StFeedbackBox>
        );
      })}
    </Layout>
  );
}

export default ReadFeedback;
