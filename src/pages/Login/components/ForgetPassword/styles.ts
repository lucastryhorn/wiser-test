import styled, { css } from 'styled-components/native';
import { isTablet } from '../../../../utils/constants';

export const ButtonForgetPassword = styled.TouchableOpacity`
  margin-top: 32px;
  align-self: center;

  ${!isTablet &&
  css`
    position: absolute;
    bottom: -140px;
  `}
`;
