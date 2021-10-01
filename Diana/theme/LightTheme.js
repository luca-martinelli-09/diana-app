import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  primaryColor: '#06c',
  onPrimaryColor: '#fff',
  subtextColor: '#666',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'dark-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};
