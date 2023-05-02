import React from "react";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

interface InputNameProps {
  name: string;
  setName: (name: string) => void;
  setSiteState: (siteState: string) => void;
}

const InputName = (props: InputNameProps) => {
  const startQuiz = () => {
    props.setSiteState("quiz");
  };

  const changeName = (name: string) => {
    console.log(name);
    props.setName(name);
  };

  return (
    <div className="input_name_container" style={styles.container}>
      <h1 style={styles.header}>AlgoFuture skal bruge dine data</h1>
      <h1 style={styles.header}>For at spå din fremtid</h1>
      <input
        type="text"
        value={props.name}
        placeholder="Dit navn"
        onChange={(event) => changeName(event.target.value)}
        style={styles.input}
      />
      <ButtonContainer onClick={() => startQuiz()} name="Angiv data" />
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
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  input: {
    borderRadius: "20px",
    border: "2px solid #fff",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    outline: "none",
    width: "100%",
    margin: "15px",
  },
};

export default InputName;
