import React, { useState } from "react";
import QuizForm from "../components/QuizForm";
import ShareLink from "../components/ShareLink";

const QuizCreatePage = () => {
  const [quizData, setQuizData] = useState(null);

  const saveQuiz = (data) => {
    setQuizData(data);
    localStorage.setItem("quiz", JSON.stringify(data)); // 로컬 저장소에 저장
  };

  return (
    <div style={{ padding: "20px" }}>
      <QuizForm onSaveQuiz={saveQuiz} />
      {quizData && <ShareLink quizData={quizData} />}
    </div>
  );
};

export default QuizCreatePage;
