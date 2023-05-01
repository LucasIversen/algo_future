import React, { useState } from "react";
import { Question } from "../questions";

interface QuizProps {
  setSiteState: (siteState: string) => void;
  addAnswer: (answer: string) => void;
  questions: Question[];
}

const Quiz = (props: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = (answer: string) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
      props.addAnswer(answer);
    } else {
      props.addAnswer(answer);
      props.setSiteState("result");
    }
  };
  return (
    <div className="app">
      <h2>{props.questions[currentQuestion].question}</h2>
      <button onClick={() => addAnswer("a")}>
        {props.questions[currentQuestion].answer_a}
      </button>
      <button onClick={() => addAnswer("b")}>
        {props.questions[currentQuestion].answer_b}
      </button>
      <button onClick={() => addAnswer("c")}>
        {props.questions[currentQuestion].answer_c}
      </button>
      <button onClick={() => addAnswer("d")}>
        {props.questions[currentQuestion].answer_d}
      </button>
    </div>
  );
};

export default Quiz;
