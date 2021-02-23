import React, { FC } from 'react';
import { StatusBar } from 'react-native';

import imageLogin from '../../assets/img/imageLogin.png';

import CardLogin from './components/CardLogin';

import {
  ContainerImage,
  ContainerKeyboardView,
  ContainerLinearGradient,
  ContainerLogin,
  ContainerScrollView,
} from './styles';

const Login: FC = () => {
  return (
    <>
      <ContainerKeyboardView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ContainerScrollView>
          <ContainerLogin>
            <ContainerImage source={imageLogin}>
              <ContainerLinearGradient />
            </ContainerImage>
            <CardLogin />
          </ContainerLogin>
        </ContainerScrollView>
      </ContainerKeyboardView>
    </>
  );
};

export default Login;
