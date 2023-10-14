
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const handlerGenerateImage = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        prompt
    } = req.body

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });

    res.json(response.data.data[0].url)
}

export default handlerGenerateImage