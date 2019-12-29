import React from "react";
import "./index.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

export default function InfoBar(props) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online img" />
        <h3>{props.room}</h3>
      </div>

      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close img" />
        </a>
      </div>
    </div>
  );
}
