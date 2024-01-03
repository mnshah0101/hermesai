import React, { ReactElement, ReactNode } from 'react';

interface ParseFunc {
  (message: string | string[]): void;
}

interface MessageParserProps {
  children: ReactNode;
  actions: { [key: string]: any };
}

const MessageParser = ({ children, actions }: MessageParserProps): ReactElement => {
  const parse: ParseFunc = (message: string | string[]) => {
      actions.handle(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;