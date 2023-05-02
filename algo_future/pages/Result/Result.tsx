import React, { useEffect, useState } from "react";
import ResultJob from "./ResultJob/ResultJob";
import ResultFriends from "./ResultFriends/ResultFriends";
import ResultLove from "./ResultLove/ResultLove";

interface ResultProps {
  setSiteState: (siteState: string) => void;
  setAnswers: (answers: string[]) => void;
  answers: string[];
  quizType: string;
  name: string;
}

const Result = (props: ResultProps) => {
  const [time, setTime] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1);
      if (time === 5) {
        setIsTimeUp(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const getResultPage = () => {
    const procentage_a =
      props.answers?.filter((answer) => answer === "a").length /
      props.answers?.length;
    const procentage_b =
      props.answers?.filter((answer) => answer === "b").length /
      props.answers?.length;
    const procentage_c =
      props.answers?.filter((answer) => answer === "c").length /
      props.answers?.length;
    const procentage_d =
      props.answers?.filter((answer) => answer === "d").length /
      props.answers?.length;

    // make an array with the two most common answers, and replace the object name with a, b, c, d
    const answers = [
      { name: "a", value: procentage_a },
      { name: "b", value: procentage_b },
      { name: "c", value: procentage_c },
      { name: "d", value: procentage_d },
    ]
      .sort((a, b) => b.value - a.value)
      .slice(0, 2)
      .map((answer) => answer.name)
      .slice(0, 2);

    const answersString = answers.join("");

    if (props.quizType === "job") {
      return <ResultJob answers={props.answers} answerString={answersString} />;
    } else if (props.quizType === "friends") {
      return <ResultFriends answerString={answersString} name={props.name} />;
    } else {
      return <ResultLove answerString={answersString} name={props.name} />;
    }
  };

  if (!isTimeUp) {
    return (
      <div className="result_container" style={styles.loadingContainer}>
        <h1 style={styles.subHeader}>Algoritmen udregner dine resultater</h1>
      </div>
    );
  }

  return (
    <div className="result_container" style={styles.container}>
      {getResultPage()}
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
  loadingContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundImage: 'url("/kode.gif")',
    alignItems: "center",
    justifyContent: "center",
  },
  subHeader: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
  },
};

export default Result;
