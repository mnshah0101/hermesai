
import OpenAI from 'openai';

import dotenv from 'dotenv';
dotenv.config();

const key = process.env.REACT_APP_OPEN_AI_KEY;


const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true
  
});



export default async function getResponse(message: any) {

const completion = await openai.chat.completions.create({
    messages: message,
    model: "gpt-4-1106-preview",
    max_tokens: 100,
  });    

return {"role": "assistant", "content": completion.choices[0].message.content}

}
