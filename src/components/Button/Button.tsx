import React, { FC } from 'react';

import Text from '../Text';

import {
  ContainerButton,
  LinearButton,
  TouchableOpacityStyledProps,
} from './syles';

interface ButtonProps extends TouchableOpacityStyledProps {
  children: string;
  loading?: boolean;
  textColor?: string;
  colors: (string | number)[];
}

const Button: FC<ButtonProps> = ({
  children,
  loading,
  textColor,
  colors,
  ...rest
}) => {
  return (
    <ContainerButton disabled={loading} {...rest}>
      <LinearButton
        colors={colors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <Text fontSize={'16px'} color={textColor} lineHeight="20px">
          {children}
        </Text>
      </LinearButton>
    </ContainerButton>
  );
};

export default Button;
