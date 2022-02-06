import logo from './logo.svg';
import './App.css';

import {connect} from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";
import {
  Switch,
  useRouteMatch,
  Route
} from "react-router-dom";

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

const mapsStateToProps = state => {
  return {
    count: state.counter.count,
  };
};

const mapsDispatchToProps = dispatch => {
  return {
    increaseCounter : () => dispatch(increaseCounter()),
    decreaseCounter : () => dispatch(decreaseCounter()),
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
