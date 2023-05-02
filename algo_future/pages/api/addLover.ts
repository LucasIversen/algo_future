import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  success: boolean;
  message: string;
  lover?: {
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

    const existingLover = await db.collection("lovers").findOne({ name });

    if (!existingLover) {
      const newLover = await db.collection("lovers").insertOne({
        name,
        answer_string,
      });
      res.status(201).json({
        success: true,
        message: "New lover inserted",
        lover: newLover.ops[0],
      });
    } else {
      res.status(400).json({
        success: false,
        message: "A lover with the same name already exists",
      });
    }
  } catch (e) {
    console.error(e);
  }
};
