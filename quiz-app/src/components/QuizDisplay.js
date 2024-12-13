import React, { useState } from "react";
import quizData from "../data/quizData"; // 10개의 퀴즈 데이터 가져오기
import "./QuizDisplay.css";

const QuizDisplay = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // 현재 퀴즈 번호
  const [score, setScore] = useState(0); // 정답 개수
  const [selectedAnswer, setSelectedAnswer] = useState(""); // 선택된 답변
  const [isQuizFinished, setIsQuizFinished] = useState(false); // 퀴즈 종료 여부

  const currentQuiz = quizData[currentQuizIndex]; // 현재 퀴즈

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuiz.answer) {
      setScore((prevScore) => prevScore + 1); // 정답이면 점수 증가
    }

    // 다음 퀴즈로 이동 또는 종료
    if (currentQuizIndex < quizData.length - 1) {
      setCurrentQuizIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer("");
    } else {
      setIsQuizFinished(true); // 모든 퀴즈 종료
    }
  };

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {isQuizFinished ? (
        <div className="result-container">
          <h2>퀴즈 종료!</h2>
          <p>총 정답 개수: {score} / {quizData.length}</p>
          <button onClick={handleRestart}>다시 시작하기</button>
        </div>
      ) : (
        <>
          <h2>{currentQuiz.question}</h2>
          <div className="quiz-options">
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={selectedAnswer === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmit} disabled={!selectedAnswer}>
            {currentQuizIndex === quizData.length - 1 ? "결과 보기" : "다음 문제"}
          </button>
        </>
      )}
    </div>
  );
};

export default QuizDisplay;
