import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./index.css";

export default function TextContainer(props) {
  const { users } = props;

  return (
    <div className="text-container">
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2 className="created-with">
        Created with React, Express, Node and Socket.IO{" "}
      </h2>

      {users ? (
        <div>
          <hr className="line" />
          <h3>People online:</h3>
          <br />

          <div>
            <h6>
              {users.map(({ name }) => (
                <div key={name}>
                  <img alt="Online Icon" src={onlineIcon} /> {name}
                </div>
              ))}
            </h6>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/**
 * <div className="textContainer">
      <div>
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!{" "}
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
 */
