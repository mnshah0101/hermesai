
import OpenAI from 'openai';





const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser:true
  
});



export default async function getResponse(message: any) {

const completion = await openai.chat.completions.create({
    messages: message,
    model: "gpt-4-1106-preview",
    max_tokens: 100,
  });    

return {"role": "assistant", "content": completion.choices[0].message.content}

}
