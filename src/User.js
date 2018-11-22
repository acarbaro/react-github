import React from "react";
import { Link } from "@reach/router";
import GHLogo from "./assets/github-logo.png";

const User = props => {
  const { username, avatar } = props;
  return (
    <Link to={`/profile/${username}`} className="user">
      <div className="image-container">
        <img src={avatar} alt={"name"} />
      </div>
      <div className="info">
        <h1>{username}</h1>
        {/* <div>
          <a href={profile} target="blank">
            <img src={GHLogo} alt={"logo"} />
          </a>
        </div> */}
      </div>
    </Link>
  );
};

export default User;
