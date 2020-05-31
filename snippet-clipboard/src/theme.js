import { createTheme } from 'office-ui-fabric-react';

const theme = createTheme({
  palette: {
    themePrimary: '#e61739',
    themeLighterAlt: '#fef5f6',
    themeLighter: '#fbd7dd',
    themeLight: '#f7b5c0',
    themeTertiary: '#f06e84',
    themeSecondary: '#e9304f',
    themeDarkAlt: '#cf1534',
    themeDark: '#ae112c',
    themeDarker: '#810d20',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  }
});

console.log(theme);


export { theme };