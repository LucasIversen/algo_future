import React, { useEffect, useState } from "react";
import Application from "./ApplicationPage";

interface window {
  width: number | undefined;
  height: number | undefined;
}

type Props = {
  quizzes: [QuizType];
};

const Home = (props: Props) => {
  const [windowSize, setWindowSize] = useState<window>({
    width: undefined,
    height: undefined,
  });
  const [quizzes, setQuizzes] = useState<QuizType[]>(props.quizzes);

  console.log(quizzes);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!quizzes) {
    return <div>Loading...</div>;
  }

  return <Application windowSize={windowSize} quizzes={quizzes} />;
};

export async function getServerSideProps() {
  try {
    let response = await fetch("https://algo-future.vercel.app/api/getQuizzes");
    //let response = await fetch("https://algo-future.vercel.app/api/getQuizzes");
    let quizzes = await response.json();

    return {
      props: { quizzes: JSON.parse(JSON.stringify(quizzes)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Home;

export interface Question {
  id: number;
  question: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
}

export interface QuizType {
  _id: string;
  name: string;
  questions: Question[];
}
