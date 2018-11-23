import React, { Component } from "react";
import { Link } from "@reach/router";

import changeUsername from "./actionCreators/changeUsername";

import { connect } from "react-redux";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/"> Search.me </Link>
        <input
          placeholder="Search the user..."
          value={this.props.username}
          onChange={this.props.handleChangeUsername}
          onKeyDown={this.props.handleDeleteChangeUsername}
        />
      </header>
    );
  }
}

const mapStateToProps = ({ username }) => ({
  username
});

const mapDispatchToProps = dispatch => ({
  handleChangeUsername(event) {
    dispatch(changeUsername(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
