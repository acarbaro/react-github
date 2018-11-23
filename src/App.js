import React from "react";

import Results from "./Results";
import Details from "./Details";
import Header from "./Header";

import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchUsername: ""
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <Results path="/" />
            <Details path="profile/:username" />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
