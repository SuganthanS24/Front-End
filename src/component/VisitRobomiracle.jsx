import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VisitRobomiracle.css';

const VisitRobomiracle = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://robomiracle.onrender.com/get-questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleQuestionClick = (entry) => {
    const queryParams = new URLSearchParams({
      question: entry.question,
      answer: entry.answer || '',
      videoPath: entry.video_path || ''
    }).toString();

    navigate(`/view-content?${queryParams}`);
  };

  return (
    <div className="questiondisplay">
      <div className="question-list">
        {questions.length > 0 ? (
          questions.map((entry, index) => (
            <h2
              key={index}
              onClick={() => handleQuestionClick(entry)}
              className="question-item"
            >
              {entry.question}
            </h2>
          ))
        ) : (
          <p>No questions available.</p>
        )}
      </div>
      <button className="back-button" onClick={() => navigate('/custom-profile')}>
        Back to Add Question
      </button>
      <button className="back-btn" onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default VisitRobomiracle;
