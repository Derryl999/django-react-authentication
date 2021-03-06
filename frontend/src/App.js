import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
      </Provider>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById("app"));


export default App;
