import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  friend: any | null;
  error: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await clientPromise;
    const db = client.db("AlgoFuture");
    const body = JSON.parse(req.body);
    const { name, answer_string } = body;

    const friend = await db.collection("friends").insertOne({
      name,
      answer_string,
    });

    res.json(friend);
  } catch (e) {
    console.error(e);
  }
};
