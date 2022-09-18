import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

interface User {
  name: string;
  result: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  const collection = db.collection<User>("vote-result");
  const result = await collection.find().toArray();
  let agree = 0;
  let disAgree = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i].result === "찬성") {
      agree++;
    } else if (result[i].result === "반대") {
      disAgree++;
    }
  }

  res.status(200).json([agree, disAgree]);
}
