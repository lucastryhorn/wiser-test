import React, { FC } from 'react';

import Text from '../Text';

import { ContainerButton, TouchableOpacityStyledProps } from './syles';

interface ButtonProps extends TouchableOpacityStyledProps {
  children: string;
  loading?: boolean;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({ children, loading, textColor, ...rest }) => {
  return (
    <ContainerButton disabled={loading} {...rest}>
      <Text fontSize={'16px'} color={textColor} lineHeight="20px">
        {children}
      </Text>
    </ContainerButton>
  );
};

export default Button;
