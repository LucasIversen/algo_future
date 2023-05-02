import React from "react";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

interface PickQuizProps {
  pickQuiz: (quizType: string) => void;
}

const PickQuiz = (props: PickQuizProps) => {
  const handleQuizButtonClick = (quizType: string) => {
    props.pickQuiz(quizType);
  };
  return (
    <div className="pick_quiz_container" style={styles.container}>
      <h1 style={styles.header}>Vælg en kategori</h1>
      <ButtonContainer
        onClick={() => handleQuizButtonClick("job")}
        name={"Job"}
      />
      <ButtonContainer
        onClick={() => handleQuizButtonClick("friends")}
        name={"Venskaber"}
      />
      <ButtonContainer
        onClick={() => handleQuizButtonClick("love")}
        name={"Kærlighed"}
      />
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
    marginBottom: "10px",
  },
};

export default PickQuiz;
