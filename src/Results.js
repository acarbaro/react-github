import React from "react";
import User from "./User";

import { connect } from "react-redux";
import getUsers from "./actionCreators/getUsers";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.retrieveGithubUsers();
  }

  render() {
    return (
      <div className="list">
        {this.props.users.map((user, u) => (
          <User
            key={u}
            username={user.login}
            user_data={user.url}
            avatar={user.avatar_url}
            profile={user.html_url}
            starred={user.starred_url}
            followers={user.followers_url}
            following={user.following_url}
            gist={user.gists_url}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  retrieveGithubUsers() {
    dispatch(getUsers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
