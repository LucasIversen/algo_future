import React from "react";

interface ResultProps {
  setSiteState: (siteState: string) => void;
  setAnswers: (answers: string[]) => void;
  answers: string[];
}

const Result = (props: ResultProps) => {
  const goBack = () => {
    props.setSiteState("start");
    props.setAnswers([]);
  };

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

  return (
    <div className="result_container">
      <h1>Resultat</h1>
      <div>
        <h2>Procentdel af a svar: {procentage_a * 100}%</h2>
        <h2>Procentdel af b svar: {procentage_b * 100}%</h2>
        <h2>Procentdel af c svar: {procentage_c * 100}%</h2>
        <h2>Procentdel af d svar: {procentage_d * 100}%</h2>
      </div>
      <button onClick={() => goBack()}>Start forfra</button>
    </div>
  );
};

export default Result;
