import React from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.getUserInfo();
  }

  async getUserInfo() {
    // let response = await fetch(this.props.username);
    // let user = await response.json();
    // console.log(user);
  }

  render() {
    return (
      <div>
        <p>hola</p>
      </div>
    );
  }
}

export default Details;
