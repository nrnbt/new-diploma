// pages/api/getuser.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/modules/db";
import { verifyToken } from "../../../utils/verifyToken";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  // Retrieve the token from the request headers, query parameters, or wherever it's expected
  const token = req.headers.authorization || req.query.token || "";

  // Verify the token
  const userId = verifyToken(token as string, "TEACHER");

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const users = await db.userD.findMany({});

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default getUsers;
