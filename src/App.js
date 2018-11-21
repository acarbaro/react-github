import React from "react";
import User from "./User";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.retrieveGithubUsers();
  }

  async retrieveGithubUsers() {
    let response = await fetch("https://api.github.com/users");
    let users = await response.json();
    this.setState({
      users
    });
  }

  render() {
    return (
      <div>
        <div className="list">
          {this.state.users.map((user, u) => (
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
      </div>
    );
  }
}

export default App;
