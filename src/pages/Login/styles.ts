import {
  KeyboardAvoidingViewProps,
  SafeAreaView,
  ScrollViewProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { isIOS, isTablet } from '../../utils/constants';

export const ContainerImage = styled.ImageBackground`
  width: ${isTablet ? '40%' : '100%'};
  height: ${isTablet ? '100%' : '500px'};
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContainerLogin = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #130525;
`;

export const ContainerLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 1 },
  colors: isTablet
    ? ['#69399900', '#130525']
    : ['#69399925', '#693999', '#130525'],
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerKeyboardView = styled.KeyboardAvoidingView.attrs<KeyboardAvoidingViewProps>(
  { ...(isIOS ? { enable: true, behavior: 'padding' } : {}) },
)`
  flex: 1;
`;

export const ContainerScrollView = styled.ScrollView.attrs<ScrollViewProps>({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flex: 1 },
})``;
