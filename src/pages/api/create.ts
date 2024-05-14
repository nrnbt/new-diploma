import { SHA256 as sha256 } from "crypto-js";
import db from "@/modules/db";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // create user
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}

export const hashPassword = (string: string): string => {
  return sha256(string).toString();
};

async function createUserHandler(req: NextApiRequest, res: NextApiResponse) {
  let errors: string[] = [];
  const { username, role, password } = req.body as {
    username: string;
    role: any;
    password: string;
  };

  if (password.length < 6) {
    errors.push("password length should be more than 6 characters");
    return res.status(400).json({ errors });
  }
  try {
    try {
      const userData = await db.userD.create({
        data: {
          username,
          role,
          password_hash: hashPassword(req.body.password)
        }
      });

      return res.status(200).json({ data: userData });
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(400).json({ message: e.message });
      }
      return res.status(400).json({ message: e.message });
    }
  }
}
