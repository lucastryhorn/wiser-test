import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';
import { TextInputProps, View } from 'react-native';
import { useTheme } from 'styled-components';

import Text from '../Text/Text';

import {
  ContainerMessage,
  ContainerTextInput,
  TextInputStyled,
} from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  error?: string;
  placeholderTop?: string;
}

interface InputRef {
  focus(): void;
}

const TextInput: ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, defaultValue, error, placeholderTop, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const theme = useTheme();

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <View>
      <ContainerMessage>
        <Text fontSize="12px" lineHeight="30px">
          {placeholderTop}
        </Text>
      </ContainerMessage>

      <ContainerTextInput isError={!!error}>
        <TextInputStyled ref={inputElementRef} {...rest} />
      </ContainerTextInput>
      {error && (
        <ContainerMessage>
          <Text fontSize="12px" lineHeight="30px" color={theme.colors.error}>
            {error}
          </Text>
        </ContainerMessage>
      )}
    </View>
  );
};

export default forwardRef(TextInput);
