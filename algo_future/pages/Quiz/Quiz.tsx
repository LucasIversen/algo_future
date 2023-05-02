import React, { useState } from "react";
import { Question } from "../index";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

interface QuizProps {
  setSiteState: (siteState: string) => void;
  addAnswer: (answer: string) => void;
  questions: Question[];
}

const Quiz = (props: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = (answer: string) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions?.length) {
      setCurrentQuestion(nextQuestion);
      props.addAnswer(answer);
    } else {
      props.addAnswer(answer);
      props.setSiteState("result");
    }
  };

  if (!props.questions) return <div>Loading...</div>;

  return (
    <div className="app" style={styles.container}>
      <h2 style={styles.header}>{props.questions[currentQuestion].question}</h2>
      <div style={styles.twoButtons}>
        <ButtonContainer
          onClick={() => addAnswer("a")}
          name={props.questions[currentQuestion]?.answer_a}
        />
        <ButtonContainer
          onClick={() => addAnswer("b")}
          name={props.questions[currentQuestion]?.answer_b}
        />
      </div>
      <div style={styles.twoButtons}>
        <ButtonContainer
          onClick={() => addAnswer("c")}
          name={props.questions[currentQuestion]?.answer_c}
        />
        <ButtonContainer
          onClick={() => addAnswer("d")}
          name={props.questions[currentQuestion]?.answer_d}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
  },
  header: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  twoButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row" as "row",
  },
};

export default Quiz;
