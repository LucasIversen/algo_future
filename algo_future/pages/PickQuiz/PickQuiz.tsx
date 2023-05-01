import React from "react";

interface PickQuizProps {
  pickQuiz: (quizType: string) => void;
}

const PickQuiz = (props: PickQuizProps) => {
  const handleQuizButtonClick = (quizType: string) => {
    props.pickQuiz(quizType);
  };
  return (
    <div className="pick_quiz_container">
      <h1>Vælg quiz</h1>
      <button onClick={() => handleQuizButtonClick("job")}>Job</button>
      <button onClick={() => handleQuizButtonClick("friends")}>
        Venskaber
      </button>
      <button onClick={() => handleQuizButtonClick("love")}>Kærlighed</button>
    </div>
  );
};

export default PickQuiz;
