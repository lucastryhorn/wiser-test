import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';

import Text from '../Text';

import { ContainerButton, LinearGradientStyledProps } from './syles';

interface ButtonProps extends LinearGradientStyledProps {
  children: string;
  loading?: boolean;
  textColor?: string;
  onPress(): void;
}

const Button: FC<ButtonProps> = ({
  children,
  loading,
  textColor,
  onPress,
  width,
  height,
  colors,
}) => {
  return (
    <TouchableHighlight disabled={loading} onPress={onPress}>
      <ContainerButton
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={colors}
        width={width}
        height={height}>
        <Text fontSize={'16px'} color={textColor} lineHeight="20px" semiBold>
          {children}
        </Text>
      </ContainerButton>
    </TouchableHighlight>
  );
};

export default Button;
