import 'styled-components';

declare module 'styled-components' {
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
