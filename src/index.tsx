import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import ModalMessage from './components/ModalMessage';

import Login from './pages/Login';

import store from './store';
import { theme } from './theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Login />
        <ModalMessage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
