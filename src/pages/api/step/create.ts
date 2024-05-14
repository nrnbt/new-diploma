// pages/api/getuser.ts
import { NextApiRequest, NextApiResponse } from "next";
const formidable = require("formidable");
import db from "@/modules/db";
import { verifyToken } from "../../../utils/verifyToken";
import { hashPassword } from "../create";
import saveFile from "@/utils/file";
async function handleStep(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization || req.query.token || "";

  const userId = verifyToken(token as string, "TEACHER");

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const form = new formidable.IncomingForm();

  const { fields, files } = await saveFile(req, true);

  const { studentId, teacherId, file, status, finalPoints,name } = fields as any;

  try {
    const { diploma_file } = files;
    const firstFile = (files as any).diploma[0];
    const size = firstFile.size;
    const filepath = firstFile.filepath;
    const newFilename = firstFile.newFilename;
    const originalFilename = firstFile.originalFilename;

    const finalFilePath = "http://localhost:3000/diploma/" + newFilename;

    // Create or update diploma
    if (req.method === "PUT") {
      await db.diploma.update({
        where: { id: +`${studentId}` }, // Assuming you want to update by studentId
        data: {
          student: { connect: { id: +studentId[0] } }, // Assuming you have studentId in fields
          teacher: { connect: { id: +teacherId[0] } }, // Assuming you have teacherId in fields
          file: finalFilePath,
          name: name[0],
          status: status, // Assuming status is provided in fields
          finalPoints: +finalPoints
        }
      });
      return res.status(200).json({ message: "Diploma updated successfully" });
    } else if (req.method === "POST") {
      await db.diploma.create({
        data: {
          student: { connect: { id: +studentId[0] } }, // Assuming you have studentId in fields
          teacher: { connect: { id: +teacherId[0] } }, // Assuming you have teacherId in fields
          file: finalFilePath,
          name: name[0],
          status: "PENDING", // Assuming status is provided in fields
          finalPoints: +0 // Assuming finalPoints is provided in fields
        }
      });
      return res.status(200).json({ message: "Diploma created successfully" });
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error creating/updating diploma:", error);
    res.status(400).json({ message: "Bad Request" });
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};

export default handleStep;
