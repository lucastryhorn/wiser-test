import React from 'react';
import { render } from 'react-native-testing-library';
import { DefaultTheme } from 'styled-components';

import Login from '../../pages/Login';

jest.mock('styled-components', () => {
  return {
    useTheme: () => ({ theme }: { theme: DefaultTheme }) => theme,
  };
});

describe('Login page', () => {
  it('should contains email/password inputs', () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('emailInput')).toBeTruthy();
    expect(getByTestId('passwordInput')).toBeTruthy();
  });
});
