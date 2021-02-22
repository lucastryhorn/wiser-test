import React, { FC } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';

import imageLogin from '../../assets/img/imageLogin.png';
import { isIOS } from '../../utils/constants';

import CardLogin from './components/CardLogin';
import ForgetPassword from './components/ForgetPassword';

import { ContainerImage, ContainerLogin } from './styles';

const Login: FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={isIOS}
        behavior="padding">
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <ContainerLogin>
            <ContainerImage source={imageLogin} />
            <CardLogin />
          </ContainerLogin>
        </ScrollView>
      </KeyboardAvoidingView>
      <ForgetPassword />
    </>
  );
};

export default Login;
