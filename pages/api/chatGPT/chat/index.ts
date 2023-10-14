// pages/api/chatgpt.js

import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req : NextApiRequest, res: NextApiResponse) {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": req.body.promp}],
      });

     res.json(completion.data.choices[0].message);
}
