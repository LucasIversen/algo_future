import React, { useEffect, useState } from "react";
import Application from "./ApplicationPage";
import { QuizType } from "./questions";

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
  const [quizzes, getQuizzes] = useState<QuizType[]>(props.quizzes);

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

  return <Application windowSize={windowSize} quizzes={quizzes} />;
};

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/getQuizzes");
    let quizzes = await response.json();

    return {
      props: { quizzes: JSON.parse(JSON.stringify(quizzes)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Home;
