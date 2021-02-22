import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Login from './pages/Login';
import store from './store';
import { theme } from './theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
