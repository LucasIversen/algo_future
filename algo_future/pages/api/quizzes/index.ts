import { NextApiRequest, NextApiResponse } from "next";
import { getQuizzes } from "../../../lib/mongo/quiz";

type Data = {
  quizzes: any[] | null;
  error: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { quizzes, error } = await getQuizzes();

    if (error) {
      return res.status(500).json({ quizzes: null, error: error });
    }

    res.status(200).json({ quizzes: quizzes, error: "" });
  } catch (error) {
    res.status(500).json({ quizzes: null, error: "ERROR" });
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
