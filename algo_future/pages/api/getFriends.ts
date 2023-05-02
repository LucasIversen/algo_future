import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  friends: any[] | null;
  error: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await clientPromise;
    const db = client.db("AlgoFuture");

    const friends = await db
      .collection("friends")
      .find({})
      .map((friend: any) => ({ ...friend, _id: friend._id.toString() }))
      .toArray();

    res.json(friends);
  } catch (e) {
    console.error(e);
  }
};
