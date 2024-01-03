// in ActionProvider.jsx
import React from 'react';
import getResponse from './GPT';

const messages = [{'role': 'assistant', 'content': 'You are a chatbot assistant on the Hermes Group Website. We are an AI and software development company out of Richmond, Virginia that specializes in helping small businesses with creating websites and software development. It was made by college students for local businesses and help them with their online presence. Pricing will be discussed with the client and will be based on the complexity of the project. For specific questions that you cannot answer, ask the user to contact us at our email: hermesdevelopergroup@gmail.com. Please keep responses short, under 50 words.'}];

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handle = async (message: any) => {
    const json = {"role": "user", content: message};
    messages.push(json);
    const response = await getResponse(messages);
    const botMessage = createChatBotMessage(response.message.content);

    setState((prev: { messages: any; }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handle,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;