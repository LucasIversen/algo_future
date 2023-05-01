import React from "react";

interface StartPageProps {
  setSiteState: (siteState: string) => void;
}

const StartPage = (props: StartPageProps) => {
  return (
    <div className="startpage_container" style={styles.container}>
      <h1 style={styles.header}>Algofuture</h1>
      <button onClick={() => props.setSiteState("pick_quiz")}>
        Start quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    allignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "column" as "column",
  },
  header: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "Roboto",
  },
};

export default StartPage;
