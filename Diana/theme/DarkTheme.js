import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#121212',
  textColor: '#fff',

  // Button
  buttonColor: '#CDF2CA',
  onButtonColor: '#3A6351',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'light-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};
