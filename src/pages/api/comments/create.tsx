// pages/api/comments.js

import db from "@/modules/db";
import { verifyToken } from "@/utils/verifyToken";
import { connect } from "http2";
import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: any) {
  const token = req.headers.authorization || req.query.token || "";

  const userId = verifyToken(token as string);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const { method } = req;

  switch (method) {
    case "POST":
      return handlePost(req, res, userId);
    case "GET":
      return handleGet(req, res);
    default:
      return res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function handlePost(req: NextApiRequest, res: any, userId: string) {
  const { stepId, text } = JSON.parse(req.body);
  try {
    const comment = await db.comment.create({
      data: {
        step: { connect: { id: parseInt(stepId) } }, // Use connect to associate the comment with the step
        user: { connect: { id: parseInt(userId) } },
        text: text
      }
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleGet(req: any, res: any) {
  const { stepId } = req.query;

  try {
    const comments = await db.comment.findMany({
      where: {
        stepId: parseInt(stepId)
      },
      include: {
        user: true
      }
    });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
