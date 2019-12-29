import React from "react";
import ReactEmoji from "react-emoji";
import "./index.css";

import { Alert } from "reactstrap";

export default function Message(props) {
  const { message, name } = props;
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="bubble-alignment-right mr-auto">
      <Alert color="primary" className="chat-bubble">
        {ReactEmoji.emojify(message.text)}
      </Alert>

      <Alert color="light" className="current-user">
        {trimmedName}
      </Alert>
    </div>
  ) : (
    <div className="bubble-alignment-left">
      <Alert color="dark" className="chat-bubble">
        {ReactEmoji.emojify(message.text)}
      </Alert>
      <Alert className="other-user">{message.user}</Alert>
    </div>
  );
}

/**
 * isSentByCurrentUser ? (
 * <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
      <p className="sentText pr-10">{trimmedName}</p>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">
          {ReactEmoji.emojify(message.text)}
        </p>
      </div>
      
    </div>
  );
 */
