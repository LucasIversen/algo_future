import React from "react";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

interface StartPageProps {
  setSiteState: (siteState: string) => void;
}

const StartPage = (props: StartPageProps) => {
  return (
    <div className="startpage_container" style={styles.container}>
      <h1 style={styles.header}>Algoritmen kender dig bedst</h1>
      <h2 style={styles.subHeader}>Spå din fremtid med AlgoFuture</h2>
      <ButtonContainer
        onClick={() => props.setSiteState("pick_quiz")}
        name="Start Quiz"
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
  },
  subHeader: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
  },
};

export default StartPage;
