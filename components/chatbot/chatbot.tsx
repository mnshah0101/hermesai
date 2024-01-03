"use client";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import React, { useState } from 'react';
import { Chat } from 'react-bootstrap-icons';
import configs from './Configs'
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import '/components/chatbot/chatbot.css'
import { Button, Highlight } from '../button';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
      const handleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='Chatbot'>
      <div className="chat_button" onClick={handleChatBot}>
        <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 p-7 "
      href="/"
      variant="secondary"
      size="small"
    >
      <span className='pr-3 text-lg px-3'>Chat With Us Now </span>{" "}
      <Chat  size={20}/>
        
    </Button>

      </div>

      
      <div className={`${isOpen ? 'open_chatbot' : 'close_chatbot'}`}>
        <Chatbot headerText='HERMES GROUP' actionProvider={ActionProvider} messageParser={MessageParser} config={configs} />
      </div>
       
    </div>
     
    </>
  );
};

