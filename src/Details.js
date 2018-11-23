import React from "react";

import ImageLoader from "./ContentLoader";

import { connect } from "react-redux";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loader: false
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.setState({ loader: true });
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(response => {
        return response.json();
      })
      .then(user => this.setState({ user, loader: false }));
  }

  render() {
    return (
      <div className="detail">
        <div className="user-detail">
          {this.state.loader ? (
            <ImageLoader />
          ) : (
            <img src={this.state.user.avatar_url} />
          )}
        </div>
        <div className="user-name">
          <h2>{this.state.user.name}</h2>
          <h3>{this.state.user.login}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Details);
