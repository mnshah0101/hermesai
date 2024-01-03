
import OpenAI from 'openai';

import dotenv from 'dotenv';
dotenv.config();

const key = process.env.OPENAI;


const openai = new OpenAI({
    apiKey: key
  
});



export default async function getResponse(message: any) {

const completion = await openai.chat.completions.create({
    messages: message,
    model: "gpt-4-1106-preview",
    max_tokens: 100,
  });    

return {"role": "assistant", "content": completion.choices[0].message.content}

}
