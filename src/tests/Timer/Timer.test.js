import { render, screen } from "@testing-library/react";
import Timer from "../../Components/Timer/Timer";

import { connect } from "react-redux";
import {
  setTimer,
  decrementTimer,
  setInfinite,
  pauseTimer,
} from "../../redux/Timer/timer.actions";

import { Provider } from "react-redux";
import store from "../../redux/store";

function TimerWrapper(props) {
  return <Timer {...props} />;
}

const mapsStateToProps = (state) => {
  return {
    time: state.timer.time,
    paused: state.timer.paused,
    isInfinite: state.timer.isInfinite,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => dispatch(setTimer(time)),
    decrementTimer: () => dispatch(decrementTimer()),
    setInfinite: () => dispatch(setInfinite()),
    pauseTimer: () => dispatch(pauseTimer()),
  };
};

const App = connect(mapsStateToProps, mapsDispatchToProps)(TimerWrapper);
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Timer should be a React component that displays a value (minutes:seconds)", () => {
  test("It should default to `00:00` time", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`00:00`);
  });

  test("It should display 02:30 for 150s as a valid time", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={150} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`02:30`);
  });

  test("It should display 10:00 for 600s as a valid time", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={600} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual("10:00");
  });

  test("It should display `∞:∞` for -1s", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={-1} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`∞:∞`);
  });

  test("It should display `∞:∞` for 9999s", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={9999} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`∞:∞`);
  });

  test("It should display `00:00` for 0s", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={0} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`00:00`);
  });

  test("It should display `2:03` for 123s", () => {
    render(
      <Provider store={store}>
        <App hasCallback newTime={123} />
      </Provider>
    );
    const timer = screen.getByTestId("timer");
    expect(timer.textContent).toEqual(`02:03`);
  });
});
