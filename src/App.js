import React, { Fragment } from "react";

import Results from "./Results";
import Details from "./Details";
import Header from "./Header";

import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="profile/:username" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
