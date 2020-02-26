import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./index.css";
import InfoBar from "../InfoBar";
import Input from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, CardBody, CardDeck } from "reactstrap";

let socket;

export default function Chat(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const END_POINT = "http://157.245.254.43:3006"; //process.env.REACT_APP_SERVER_ENDPOINT; || "localhost:5000"; // server port
  const history = useHistory();

  useEffect(() => {
    console.log("inside server:", END_POINT);
    const { name, room } = queryString.parse(props.location.search);
    socket = io(END_POINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
        history.push("/");
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
      //goBackHome();
    };

    // eslint-disable-next-line
  }, [END_POINT, props.location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [messages]);

  // function for sending messages
  const sendMessage = e => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <CardDeck className="deck">
      <Card className="card-chat">
        <CardHeader className="chat-header">
          <InfoBar room={room} />
        </CardHeader>
        <CardBody className="chat-body">
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            className="chat-input"
          />
        </CardBody>
      </Card>
      {/********************************************************/}
      <Card className="card-display-text my-auto">
        <CardBody>
          <TextContainer users={users} />
        </CardBody>
      </Card>
    </CardDeck>
  );
}
