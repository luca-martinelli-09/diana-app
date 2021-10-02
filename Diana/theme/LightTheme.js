import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  // General
  backgroundColor: '#fff',
  textColor: '#333',

  // Button
  buttonColor: '#CDF2CA',
  onButtonColor: '#3A6351',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'dark-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};
