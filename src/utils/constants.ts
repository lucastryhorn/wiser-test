import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const REQUIRED_FIELD = 'Campo Obrigatório.';
export const INVALID_EMAIL = 'E-mail Inválido.';

export const isIOS = Platform.OS === 'ios';

export const isTablet = DeviceInfo.getDeviceType() === 'Tablet';
