import React, { useState } from "react";
import QuizForm from "../components/QuizForm";
import ShareLink from "../components/ShareLink";

const Home = () => {
  const [quizData, setQuizData] = useState(null);

  const saveQuiz = (data) => {
    setQuizData(data);
    localStorage.setItem("quiz", JSON.stringify(data));
  };

  return (
    <div className="container">
      <h1>Create Your Quiz</h1>
      <QuizForm onSaveQuiz={saveQuiz} />
      {quizData && <ShareLink quizData={quizData} />}
    </div>
  );
};

export default Home;
