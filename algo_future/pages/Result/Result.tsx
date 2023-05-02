import React from "react";
import ResultJob from "./ResultJob/ResultJob";
import ResultFriends from "./ResultFriends/ResultFriends";

interface ResultProps {
  setSiteState: (siteState: string) => void;
  setAnswers: (answers: string[]) => void;
  answers: string[];
  quizType: string;
  name: string;
}

const Result = (props: ResultProps) => {
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
      return <></>;
    }
  };

  return (
    <div className="result_container" style={styles.container}>
      <div>{getResultPage()}</div>
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
};

export default Result;
