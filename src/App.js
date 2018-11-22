import React from "react";
import Results from "./Results";
import Details from "./Details";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Results path="/" />
          <Details path="profile/:username" />
        </Router>
      </Provider>
    );
  }
}

export default App;
