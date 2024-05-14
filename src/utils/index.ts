import jwt from "jsonwebtoken";

const secretKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5OTk1ODMyNCwiaWF0IjoxNjk5OTU4MzI0fQ.NTfLs3f64f6y390SsjEq8Zg7G3mMUK9dxnE0OcB4Qcs";

export const verifyToken = (token: string, roles: Array<number>) => {
  try {
    const decoded = jwt.verify(token.split(" ")[1], secretKey) as {
      userId: string;
      roles: number;
    };
    if (roles?.includes(decoded.roles)) {
      return decoded.userId;
    } else {
      console.error("role doesn't match");
      return null;
    }
  } catch (error) {
    console.error("Token verification failed:", (error as any).message);
    return null;
  }
};
