import React from "react";
import QuizDisplay from "./components/QuizDisplay";
import "./components/QuizDisplay.css";

const App = () => {
  return (
    <div>
      <header className="app-header">
        <h1>묵's 퀴즈쇼</h1>
      </header>
      <main>
        <QuizDisplay />
      </main>
    </div>
  );
};

export default App;
