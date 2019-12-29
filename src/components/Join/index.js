import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import "./index.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="box">
      <h1 className="heading">Join chat room</h1>
      <div>
        <Input
          placeholder="Name"
          className="join-input mx-auto"
          type="text"
          size="lg"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="Room"
          className="join-input mx-auto"
          type="text"
          size="lg"
          onChange={e => setRoom(e.target.value)}
        />
      </div>
      <Link
        onClick={e => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <Button className="button" type="submit" size="lg" color="primary">
          Join
        </Button>
      </Link>
    </div>
  );
}

/**
 * 
 * <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create chat room</h1>

        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div> 
 */
