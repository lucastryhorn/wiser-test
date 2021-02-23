import { TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from 'styled-components/native';

import { isTablet } from '../../utils/constants';

export interface TouchableOpacityStyledProps extends TouchableOpacityProps {
  bgColor?: string;
  width?: string;
  height?: string;
}

export const ContainerButton = styled.TouchableOpacity<TouchableOpacityStyledProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${isTablet &&
  css`
    shadow-opacity: 0.3;
    shadow-radius: 3px;
    shadow-offset: 0 0;
    elevation: 5;
  `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;

export const LinearButton = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
