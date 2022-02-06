import { render, screen } from '@testing-library/react';
import App from './App';
import store from './redux/store';
import {Provider} from "react-redux";
import { HashRouter } from 'react-router-dom';
test('renders learn react link', () => {
  render(<HashRouter><Provider store={store}><App /></Provider></HashRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
