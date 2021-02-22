import React, { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import Text from '../../../../components/Text';
import Form from '../Form';
import { ContainerCardLogin } from './styles';

const CardLogin: FC = () => {
  const { colors } = useTheme();

  return (
    <ContainerCardLogin>
      <Text fontSize="24px" lineHeight="32px" textAlign="center">
        Olá, seja{'\n'}
        <Text>bem-vindo!</Text>
      </Text>
      <View style={{ marginTop: 16, marginBottom: 16 }}>
        <Text fontSize="12px" lineHeight="20px" semiBold color={colors.primary}>
          Para acessar a plataforma, faça seu login.
        </Text>
      </View>

      <Form />
    </ContainerCardLogin>
  );
};

export default CardLogin;
