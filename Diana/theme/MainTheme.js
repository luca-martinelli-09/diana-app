import {lightTheme, colorSchemeLight, satusBarLightProps} from './LightTheme';
import {darkTheme, colorSchemeDark, satusBarDarkProps} from './DarkTheme';

const MainTheme = {
  light: {
    colorScheme: colorSchemeLight,
    style: lightTheme,
    statusBarProps: satusBarLightProps,
  },
  dark: {
    colorScheme: colorSchemeDark,
    style: darkTheme,
    statusBarProps: satusBarDarkProps,
  },
};

export {MainTheme};
