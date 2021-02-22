import { TextProps } from 'react-native';

import styled, { css } from 'styled-components/native';

export interface TextStyledProps extends TextProps {
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  semiBold?: boolean;
  textDecoration?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
}

export const TextStyled = styled.Text<TextStyledProps>`
  color: ${({ color, theme }) => color || theme.colors.text};

  font-family: 'Montserrat-Regular';

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ semiBold }) =>
    semiBold &&
    css`
      font-family: 'Montserrat-SemiBold';
    `};

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `};
`;
