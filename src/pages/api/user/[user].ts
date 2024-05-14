// pages/api/coworker/[coworkerid].ts
import db from "@/modules/db";
import { NextApiRequest, NextApiResponse } from "next";

async function getStaff(req: NextApiRequest, res: NextApiResponse) {
  const { staff_account } = req.query;

  try {
    if (!staff_account) {
      return res.status(404).json({ message: "user not found" });
    }
    const user = await db.staffAccount.findUnique({
      where: {
        id: +staff_account
      },
      select: {
        id: true,
        user: true,
        email: true,
        created_at: true,
        roleId: true,
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching coworker:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default getStaff;
