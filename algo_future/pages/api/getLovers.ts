import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongo";

type Data = {
  lovers: any[] | null;
  error: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const client = await clientPromise;
    const db = client.db("AlgoFuture");

    const lovers = await db
      .collection("lovers")
      .find({})
      .map((lover: any) => ({ ...lover, _id: lover._id.toString() }))
      .toArray();

    res.json(lovers);
  } catch (e) {
    console.error(e);
  }
};
