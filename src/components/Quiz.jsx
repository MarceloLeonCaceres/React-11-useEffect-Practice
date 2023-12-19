import { useState } from "react";
import QUESTIONS from "./questions.js";
import quizCompleteImg from '../assets/quiz-complete.png';

import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if(quizIsComplete){
    return (
        <div id="summary">
            <h2>Quiz Completed!</h2>
            <img src={quizCompleteImg} alt="Quiz completed logo"/>
        </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUsersAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  return (    
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>         
  );
}
