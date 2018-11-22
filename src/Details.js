import React from "react";
import { connect } from "react-redux";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(response => {
        return response.json();
      })
      .then(user => this.setState({ user }));
  }

  render() {
    return (
      <div className="detail">
        <div className="user-detail">
          <img src={this.state.user.avatar_url} />
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
