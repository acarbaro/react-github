import React, { Fragment } from "react";
import User from "./User";

import ContentLoader from "./ContentLoader";

import { connect } from "react-redux";
import getUsers from "./actionCreators/getUsers";

const { CardLoader } = ContentLoader;

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loader: false,
      length: 10,
      dummyArr: []
    };
  }
  componentDidMount() {
    this.props.retrieveGithubUsers();
    this.transformLengthToArray();
  }

  transformLengthToArray() {
    let dummyArr = [];
    for (let index = 0; index < 8; index++) {
      dummyArr.push([index]);
    }
    this.setState({ dummyArr });
  }

  render() {
    return (
      <div className="list">
        {this.props.loader ? (
          <Fragment>
            {this.state.dummyArr.map(arr => (
              <CardLoader key={arr} />
            ))}
          </Fragment>
        ) : (
          this.props.users.map((user, u) => (
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
              loader={this.props.loader}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, loader }) => ({
  users,
  loader
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
