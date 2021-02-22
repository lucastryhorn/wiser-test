import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
            <ContainerImage source={imageLogin}>
              <LinearGradient
                start={{ x: 0, y: 0.3 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                colors={['#69399925', '#693999', '#130525']}
              />
            </ContainerImage>
            <CardLogin />
          </ContainerLogin>
        </ScrollView>
      </KeyboardAvoidingView>
      <ForgetPassword />
    </>
  );
};

export default Login;
