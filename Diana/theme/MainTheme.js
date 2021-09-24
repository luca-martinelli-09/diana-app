import {theme as lightTheme, colorScheme as colorSchemeLight, statusBarProps as satusBarLightProps} from './LightTheme';
import {theme as darkTheme, colorScheme as colorSchemeDark, statusBarProps as satusBarDarkProps} from './DarkTheme';

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
