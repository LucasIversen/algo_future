import React, { useEffect, useState } from "react";
import { Question, QuizType } from "./index";
import StartPage from "./StartPage/StartPage";
import PickQuiz from "./PickQuiz/PickQuiz";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import InputName from "./InputName/InputName";

interface ApplicationProps {
  windowSize: {
    width: number | undefined;
    height: number | undefined;
  };
  quizzes: QuizType[];
}

const Application = (props: ApplicationProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizType, setQuizType] = useState<string>("");
  const [quizzes, setQuizzes] = useState<QuizType[]>(props.quizzes);
  const [siteState, setSiteState] = useState<string>("start");
  const [name, setName] = useState<string>("");
  const [gifStyle, setGifStyle] = useState<any>({});

  useEffect(() => {
    const smallestDimension =
      props.windowSize.height && props.windowSize.width
        ? props.windowSize.width < props.windowSize.height
          ? props.windowSize.width
          : props.windowSize.height
        : 500;
    setGifStyle({
      display: "flex",
      height: smallestDimension * 0.9,
      width: smallestDimension * 0.9,
      borderRadius: "50%",
      backgroundImage: 'url("/giphy.gif")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px",
      marginLeft: "20px",
    });
  }, [props.windowSize]);

  const pickQuiz = (quizType: string) => {
    switch (quizType) {
      case "job": {
        setQuestions(quizzes[0].questions);
        setQuizType(quizType);
        setSiteState("quiz");
        break;
      }
      case "friends": {
        setQuestions(quizzes[1].questions);
        setQuizType(quizType);
        setSiteState("pick_name");
        break;
      }
      case "love": {
        setQuestions(quizzes[2].questions);
        setQuizType(quizType);
        setSiteState("pick_name");
        break;
      }
    }
  };

  const getCurrentPage = () => {
    if (!quizzes) return <div>Loading...</div>;

    switch (siteState) {
      case "start": {
        return <StartPage setSiteState={setSiteState} />;
      }
      case "pick_quiz": {
        return <PickQuiz pickQuiz={pickQuiz} />;
      }
      case "pick_name": {
        return (
          <InputName
            setName={setName}
            setSiteState={setSiteState}
            name={name}
          />
        );
      }
      case "quiz": {
        return (
          <Quiz
            setSiteState={setSiteState}
            addAnswer={(answer) => {
              setAnswers([...answers, answer]);
            }}
            questions={questions}
          />
        );
      }
      case "result": {
        return (
          <Result
            setSiteState={setSiteState}
            answers={answers}
            setAnswers={setAnswers}
            quizType={quizType}
            name={name}
          />
        );
      }
    }
  };

  if (true) {
    return (
      <div>
        <h1>Algoritmen tager en lur. Vend tilbage igen senere!</h1>
      </div>
    )
  }

  return (
    <div className="container" style={styles.container}>
      <div className="weird_gif" style={gifStyle}>
        {getCurrentPage()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
    height: "100%",
    width: "100%",
  },
};

export default Application;
