import React from "react";
import { Link } from "@reach/router";

const User = props => {
  const { username, avatar } = props;
  return (
    <Link to={`/profile/${username}`} className="user">
      <div className="image-container">
        <img src={avatar} alt={"name"} />
      </div>
      <div className="info">
        <h1>{username}</h1>
      </div>
    </Link>
  );
};

export default User;
