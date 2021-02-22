import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import styled from 'styled-components/native';
import { isIOS } from '../../utils/constants';

export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
`;

export const ContainerLogin = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #130525;
  /* padding-bottom: ${isIOS ? '40px' : '135px'}; */
`;
