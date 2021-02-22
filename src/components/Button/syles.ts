import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import styled, { css } from 'styled-components/native';

export interface LinearGradientStyledProps extends LinearGradientProps {
  bgColor?: string;
  width?: string;
  height?: string;
}

export const ContainerButton = styled(
  LinearGradient,
)<LinearGradientStyledProps>`
  border-radius: 8px;
  align-items: center;
  justify-content: center;

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
