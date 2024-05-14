// pages/api/getuser.ts
import { NextApiRequest, NextApiResponse } from "next";
const formidable = require("formidable");
import db from "@/modules/db";
import { verifyToken } from "../../../utils/verifyToken";
import { hashPassword } from "../create";
import saveFile from "@/utils/file";
async function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();

  const token = req.headers.authorization || req.query.token || "";

  const userId = verifyToken(token as string, "TEACHER");

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  form.parse(req, async (err: any, fields: any) => {
    if (err) {
      return res.status(400).json({ message: "Error parsing form data" });
    }

    const { username, role, password, user_id } = fields;

    try {
      if (!username || !role || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const hashedPassword = hashPassword(password);

      if (req.method === "PUT") {
        // Update existing user
        await db.userD.update({
          where: { id: +user_id },
          data: {
            username: username[0],
            role: role[0] as any,
            password_hash: hashedPassword
          }
        });
        return res.status(200).json({ message: "User updated successfully" });
      } else if (req.method === "POST") {
        // Create new user
        await db.userD.create({
          data: {
            username: username[0],
            role: role[0] as any,
            password_hash: hashedPassword
          }
        });
        return res.status(200).json({ message: "User created successfully" });
      } else {
        return res.status(405).json({ message: "Method Not Allowed" });
      }
    } catch (error) {
      console.error("Error creating/updating user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
}

export const config = {
  api: {
    bodyParser: false
  }
};

export default handleUser;
