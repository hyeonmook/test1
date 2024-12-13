import React, { useState } from "react";
import "./QuizForm.css"; // 스타일 파일 연결

const QuizForm = ({ onSaveQuiz }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quizData = { question, options, answer };
    onSaveQuiz(quizData);
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2>퀴즈를 만들어 보세요</h2>
      <div className="form-group">
        <label>질문</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="질문을 입력하세요"
        />
      </div>
      <div className="form-group">
        <label>보기</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`보기 ${index + 1}`}
          />
        ))}
      </div>
      <div className="form-group">
        <label>정답</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="정답을 입력하세요"
        />
      </div>
      <button type="submit">퀴즈 저장</button>
    </form>
  );
};

export default QuizForm;
