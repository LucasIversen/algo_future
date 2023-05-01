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

  if (!quizzes) {
    return <div>Loading...</div>;
  }

  return <Application windowSize={windowSize} quizzes={quizzes} />;
};

export async function getServerSideProps() {
  try {
    //let response = await fetch("http://localhost:3000/api/getQuizzes");
    let response = await fetch("https://algo-future.vercel.app/api/getQuizzes");
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

export const Job = [
  {
    id: 0,
    question: "Hvad kan du bedst lide at lave efter skole",
    answer_a: "Hænge ud med venner",
    answer_b: "Dyrke sport",
    answer_c: "Være kreativ",
    answer_d: "Være online",
  },
  {
    id: 1,
    question: "Hvor vil du helst bo når du bliver voksen?",
    answer_a: "I din hjemby",
    answer_b: "I udlandet",
    answer_c: "I en storby",
    answer_d: "På landet",
  },
  {
    id: 2,
    question: "Hvad kan du bedst lide ved skolen?",
    answer_a: "Lærerne",
    answer_b: "Klassen",
    answer_c: "Fagene",
    answer_d: "Frikvarterene",
  },
  {
    id: 0,
    question: "Hvad vil du helst spise?",
    answer_a: "Kyllingesalat",
    answer_b: "Pasta og kødsovs",
    answer_c: "Pizza",
    answer_d: "Stegt flæsk med persillesovs",
  },
  {
    id: 0,
    question: "Hvad vil du helst lave i frikvateret?",
    answer_a: "Spille skak",
    answer_b: "Spille bordtennis",
    answer_c: "Snakke med venner",
    answer_d: "Være udenfor",
  },
  {
    id: 0,
    question: "Hvad er vigtigst for dig?",
    answer_a: "at være lykkelig",
    answer_b: "Få drømmejobbet",
    answer_c: "Familien",
    answer_d: "Tjene en masse penge",
  },
  {
    id: 0,
    question: "Hvilket fag kan du bedst lide?",
    answer_a: "dansk",
    answer_b: "billedkunst",
    answer_c: "idræt",
    answer_d: "biologi",
  },
];

export const Friends: Question[] = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
  {
    id: 1,
    question: "What is the capital of Spain?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
];

export const Love: Question[] = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
  {
    id: 1,
    question: "What is the capital of Spain?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    answer_a: "Paris",
    answer_b: "London",
    answer_c: "Berlin",
    answer_d: "Madrid",
  },
];
