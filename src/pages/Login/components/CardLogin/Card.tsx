import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';

import Text from '../../../../components/Text';

import { isTablet } from '../../../../utils/constants';

import Form from '../Form';

import { ContainerCardLogin, SubTitle } from './styles';

const CardLogin: FC = () => {
  const { colors } = useTheme();

  const memoText = useMemo(() => {
    if (isTablet) {
      return 'Para acessar a plataforma,\nfaça seu login.';
    }
    return 'Para acessar a plataforma, faça seu login.';
  }, [isTablet]);

  return (
    <ContainerCardLogin>
      <Text
        fontSize={isTablet ? '40px' : '24px'}
        lineHeight={isTablet ? '48px' : '32px'}
        {...(!isTablet ? { textAlign: 'center' } : {})}>
        Olá, seja{'\n'}
        <Text>bem-vindo!</Text>
      </Text>
      <SubTitle>
        <Text
          fontSize={isTablet ? '16px' : '12px'}
          lineHeight="20px"
          semiBold
          color={colors.primary}>
          {memoText}
        </Text>
      </SubTitle>

      <Form />
    </ContainerCardLogin>
  );
};

export default CardLogin;
