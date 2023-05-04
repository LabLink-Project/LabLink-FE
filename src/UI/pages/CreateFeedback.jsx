import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from 'react-bootstrap';
import { api } from 'src/api/api';
import { useParams } from 'react-router-dom';
import { cookies } from 'src/shared/Cookie';
import { useNavigate } from 'react-router-dom';
import { StFeedbackInput } from '../styles/CreateFeedback.styled';

function CreateFeedback() {
  const studyId = useParams();
  const nav = useNavigate();

  const token = cookies.get('token');

  const [feedback, setFeedback] = useState({
    feedbackMessage: '',
  });

  const feedbackOnchange = e => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const feedbackCheck = feedback => {
    if (feedback.feedbackMessage === '') {
      alert('피드백을 작성해주세요');
      return false;
    }
    return true;
  };

  const feedbackOnsubmit = async () => {
    if (feedbackCheck(feedback)) {
      try {
        const { data } = await api.post(
          `/studies/${studyId.id}/feedback`,
          feedback,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(data.message);
        nav(-1);
      } catch (error) {
        alert(`${error.response.data.message}`);
      }
    }
  };

  return (
    <Layout header={'피드백 작성'}>
      <form onSubmit={feedbackOnsubmit}>
        <p>피드백을 작성해주세요</p>
        <StFeedbackInput
          type="text"
          name="feedbackMessage"
          placeholder="50자 이내로 작성해주세요"
          value={feedback.feedbackMessage}
          onChange={feedbackOnchange}
        />
        <div className="d-grid gap-2">
          <Button
            variant="dark"
            type="submit"
          >
            작성완료
          </Button>
        </div>
      </form>
    </Layout>
  );
}

export default CreateFeedback;
