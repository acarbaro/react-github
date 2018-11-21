import React from "react";
import { Link } from "@reach/router";
import GHLogo from "./assets/github-logo.png";

const User = props => {
  const { username, avatar, profile } = props;

  return (
    <div className="user">
      <div className="image-container">
        <img src={avatar} alt={"name"} />
      </div>
      <div className="info">
        <h1>{username}</h1>
        <a href={profile} target="blank">
          <img src={GHLogo} alt={"logo"} />
        </a>
      </div>
    </div>
  );
};

export default User;
