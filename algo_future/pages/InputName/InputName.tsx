import React from "react";

interface InputNameProps {
  setName: (name: string) => void;
  setSiteState: (siteState: string) => void;
}

const InputName = (props: InputNameProps) => {
  const startQuiz = () => {
    props.setSiteState("quiz");
  };
  return (
    <div className="input_name_container">
      <h1>Indtast dit navn</h1>
      <input
        type="text"
        onChange={(event) => props.setName(event.target.value)}
      />
      <button onClick={() => startQuiz()}>Start quiz</button>
    </div>
  );
};

export default InputName;
