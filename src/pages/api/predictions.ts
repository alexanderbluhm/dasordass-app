// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  data?: any;
};

// calls the predictions API
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
  }

  const url = process.env.API_URL;
  if (!url) {
    throw new Error("API URL not set as an environment variable");
  }

  const sentence = req.body?.sentence;
  if (!sentence) {
    res.status(400).json({ message: "Sentence param is missing" });
  }

  try {
    const response = await fetch("https://dasoderdassapp.fly.dev/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: {
          sentence,
        },
      }),
    });
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

export default handler;
