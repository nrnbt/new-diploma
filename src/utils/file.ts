import formidable, { Fields, Files } from "formidable";
import { NextApiRequest } from "next";
import path from "path";

const pathDist: string = path.join(process.cwd(), "/public/diploma");
const saveFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: Fields; files: Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = pathDist;
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  options.keepExtensions = true;
  console.log("here");

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, async (err: any, fields: Fields, files: Files | any) => {
      if (err) reject(err);
      try {
        resolve({ fields, files });
      } catch (error) {
        reject(error);
      }
    });
  });
};

export default saveFile;
