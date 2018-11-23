import React, { Component } from "react";
import { Link } from "@reach/router";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/"> Search.me </Link>
      </header>
    );
  }
}

export default Header;
