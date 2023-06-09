import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  success: boolean;
  message: string;
  friend?: {
    _id: string;
    name: string;
    answer_string: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await clientPromise;
    const db = client.db("AlgoFuture");
    const body = JSON.parse(req.body);
    const { name, answer_string } = body;

    const existingFriend = await db.collection("friends").findOne({ name });

    if (!existingFriend) {
      const newFriend = await db.collection("friends").insertOne({
        name,
        answer_string,
      });
      res.status(201).json({
        success: true,
        message: "New friend inserted",
        friend: newFriend.ops[0],
      });
    } else {
      res.status(400).json({
        success: false,
        message: "A friend with the same name already exists",
      });
    }
  } catch (e) {
    console.error(e);
  }
};
