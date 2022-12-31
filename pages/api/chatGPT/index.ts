import {  Configuration, OpenAIApi  } from 'openai';

import type { NextApiRequest, NextApiResponse } from 'next'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const handlerChatGPT = async (
        req: NextApiRequest,
        res: NextApiResponse
     )  => {

        const {
            description
        } = req.body;

    try {

         const openai = new OpenAIApi(configuration)

        if(req.method === "POST"){

            console.log(description);

            const response = await openai.createCompletion({
            model: "code-davinci-002",
            prompt: `#${description}`
            });
            
            res.status(201).json(
                {
                    status: true,
                    boot: response.data.choices[0].text?.replace("\n", "")
                }
            );
        }
    } catch (e) {
        res.status(400).json(
            {
                status: false,
                description: e
            }
        );
    }
}

export default handlerChatGPT;