import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    lightTextColor: string;
    textColor: string;
    accentColor: string;
    inputBgColor: string;
    inputBorderColor: string;
    errorColor: string;
    sidebarBgColor: string;
    hoverColor: string;
    borderColor: string;
  }
}
