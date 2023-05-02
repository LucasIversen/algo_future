import React from "react";

interface ButtonContainerProps {
  onClick: () => void;
  name: string;
}

const ButtonContainer = (props: ButtonContainerProps) => {
  return (
    <button
      className="button_container"
      style={styles.container}
      onClick={() => props.onClick()}
    >
      <p style={styles.buttonText}>{props.name}</p>
    </button>
  );
};

const styles = {
  container: {
    borderRadius: "5px",
    border: "1px solid #888",
    background: "rgba(0, 0, 0, 0.3)",
    color: "#333",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "10px",
  },
  buttonText: {
    fontWeight: "bold",
    textShadow: "0px 0px 4px rgba(0, 0, 0, 0.8)",
    color: "white",
  },
};

export default ButtonContainer;
