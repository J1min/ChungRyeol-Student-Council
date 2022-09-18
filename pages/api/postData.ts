import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

interface User {
  name: string;
  result: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  const collection = db.collection<User>("vote-result");

  await collection.insertOne({
    name: req.body.name,
    result: req.body.result,
  });

  return res.status(204).end();
}
