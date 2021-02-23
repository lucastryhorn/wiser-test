import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    dark: boolean;

    colors: {
      primary: string;
      text: string;
      background: string;
      error: string;
    };
  }
}
