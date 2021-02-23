import React from 'react';
import { render } from '../../utils/test-utils';

import Login from '../../pages/Login';

describe('Login page', () => {
  it('should contains email/password inputs', () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId('emailInput')).toBeTruthy();
    expect(getByTestId('passwordInput')).toBeTruthy();
  });
});
