import React, { useEffect, useState } from "react";
import { Job, Friends, Love, Question, QuizType } from "./questions";
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
      height: smallestDimension * 0.9,
      width: smallestDimension * 0.9,
      borderRadius: "50%",
      backgroundImage: 'url("/giphy.gif")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    });
  }, [props.windowSize]);

  const pickQuiz = (quizType: string) => {
    switch (quizType) {
      case "job": {
        setQuestions(Job);
        setQuizType(quizType);
        setSiteState("quiz");
        break;
      }
      case "friends": {
        setQuestions(Friends);
        setQuizType(quizType);
        setSiteState("pick_name");
        break;
      }
      case "love": {
        setQuestions(Love);
        setQuizType(quizType);
        setSiteState("pick_name");
        break;
      }
    }
  };

  const getCurrentPage = () => {
    if (quizzes.length === 0) return <div>Loading...</div>;

    switch (siteState) {
      case "start": {
        return <StartPage setSiteState={setSiteState} />;
      }
      case "pick_quiz": {
        return <PickQuiz pickQuiz={pickQuiz} />;
      }
      case "pick_name": {
        return <InputName setName={setName} setSiteState={setSiteState} />;
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
          />
        );
      }
    }
  };

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
  },
};

export default Application;
