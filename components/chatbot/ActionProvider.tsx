import React, { ReactElement, ReactNode } from 'react';
import getResponse from './GPT';

interface ChatMessage {
  role: string;
  content: string;
}

let messages: ChatMessage[] = [
  {
    'role': 'assistant',
    'content': 'You are a chatbot assistant on the Hermes Group Website. We are an AI and software development company out of Richmond, Virginia that specializes in helping small businesses with creating websites and software development. It was made by college students for local businesses and help them with their online presence. Pricing will be discussed with the client and will be based on the complexity of the project. For specific questions that you cannot answer, ask the user to contact us at our email: hermesdevelopergroup@gmail.com. Please keep responses short, under 50 words.'
  }
];

interface HandleFunc {
  (message: string): Promise<void>;
}

interface ActionProviderProps {
  createChatBotMessage: (message: string) => ChatMessage;
  setState: (func: (prev: { messages: ChatMessage[] }) => object) => void;
  children: ReactNode;
}

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProviderProps): ReactElement => {
  const handle: HandleFunc = async (message: string) => {
    const json = {"role": "user", content: message};
    messages.push(json);
    const response = await getResponse(messages);
    const botMessage = createChatBotMessage(response.content ? response.content : 'Sorry, I did not understand that.' );

    setState((prev: { messages: ChatMessage[]; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement, {
          actions: {
            handle,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;