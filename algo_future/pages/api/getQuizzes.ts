import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  quizzes: any[] | null;
  error: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await clientPromise;
    const db = client.db("AlgoFuture");

    const quizzes = await db
      .collection("quizzes")
      .find({})
      .map((quiz: any) => ({ ...quiz, _id: quiz._id.toString() }))
      .toArray();

    res.json(quizzes);
  } catch (e) {
    console.error(e);
  }
};
