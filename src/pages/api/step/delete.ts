// pages/api/getuser.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/modules/db";
import { verifyToken } from "../../../utils/verifyToken";

async function DeleteUser(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization || req.query.token || "";

  const userId = verifyToken(token as string, "TEACHER");

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      const user = await db.diploma.delete({
        where: {
          id: parseInt(id as string, 10)
        }
      });

      res.status(200).json({ success: true, user });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } finally {
      await db.$disconnect();
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}

export default DeleteUser;
