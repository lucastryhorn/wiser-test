import React, { FC } from 'react';
import { useTheme } from 'styled-components';

import Text from '../../../../components/Text';
import { isTablet } from '../../../../utils/constants';
import { ButtonForgetPassword } from './styles';

const ForgetPassword: FC = () => {
  const { colors } = useTheme();

  return (
    <ButtonForgetPassword>
      <Text
        fontSize="14px"
        color={isTablet ? colors.primary : 'white'}
        textAlign="center">
        Esqueceu seu login ou senha?{'\n'}
        Clique{' '}
        <Text
          fontSize="14px"
          semiBold
          color={isTablet ? colors.text : 'white'}
          textDecoration="underline">
          aqui
        </Text>
      </Text>
    </ButtonForgetPassword>
  );
};

export default ForgetPassword;
