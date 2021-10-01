import {createThemeFromColorScheme} from './CommonTheme';

const colorScheme = {
  backgroundColor: '#212121',
  textColor: '#fff',
  primaryColor: '#06c',
  onPrimaryColor: '#fff',
  subtextColor: '#eee',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'light-content',
};

const theme = createThemeFromColorScheme(colorScheme);

export {theme, colorScheme, statusBarProps};
