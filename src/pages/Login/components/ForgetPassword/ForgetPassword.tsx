import React, { FC } from 'react';

import Text from '../../../../components/Text';
import { ButtonForgetPassword } from './styles';

const ForgetPassword: FC = () => {
  return (
    <ButtonForgetPassword>
      <Text fontSize="14px" color="white" textAlign="center">
        Esqueceu seu login ou senha?{'\n'}
        Clique{' '}
        <Text fontSize="14px" color="white" textDecoration="underline">
          aqui
        </Text>
      </Text>
    </ButtonForgetPassword>
  );
};

export default ForgetPassword;
