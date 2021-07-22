import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;

      disabled: string;
      text: string;

      modalDelete: string;

      white: string;
      red: string;
      green: string;
      yellow: string;
    };
  }
}
