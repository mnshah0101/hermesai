import getResponse from './GPT';
import YourActionProvider from './ActionProvider';

import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. Ask me anything about Hermes!`, {
    
    }),
  ],
  widgets: [
    
        ],
      }
      

export default config;
