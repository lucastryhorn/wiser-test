import 'jest-styled-components/native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components/native';
import store from '../store';
import reducers from '../store/reducers';

import { theme } from '../theme';
const rtl = require('react-native-testing-library');

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  rtl.render(ui, {
    wrapper: AllTheProviders,
    initialState: {},
    store: createStore(reducers, {}),
    ...options,
  });
// re-export everything
export * from 'react-native-testing-library';

// override render method
module.exports = {
  ...rtl,
  render: customRender,
};
