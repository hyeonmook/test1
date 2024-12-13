import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const quizDataParam = queryParams.get("data");

    if (quizDataParam) {
      const decodedData = JSON.parse(decodeURIComponent(quizDataParam));
      setQuizData(decodedData);
    }
  }, [location.search]);

  return (
    <div className="container">
      <h1>Quiz</h1>
      {quizData ? (
        <div>
          <h2>{quizData.question}</h2>
          <ul>
            {quizData.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p><strong>Answer:</strong> {quizData.answer}</p>
        </div>
      ) : (
        <p>No quiz data found.</p>
      )}
    </div>
  );
};

export default Quiz;
