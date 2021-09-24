import {StyleSheet} from 'react-native';

const colorSchemeDark = {
  backgroundColor: '#121212',
  primaryColor: '#06c',
  onPrimaryColor: '#fff',
  subtextColor: '#eee',
};

const satusBarDarkProps = {
  backgroundColor: colorSchemeDark.backgroundColor,
  barStyle: 'light-content',
};

const darkTheme = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorSchemeDark.backgroundColor,
  },

  header: {
    backgroundColor: colorSchemeDark.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },

  whiteIconHeader: {
    backgroundColor: colorSchemeDark.backgroundColor,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },

  headerText: {
    color: colorSchemeDark.onPrimaryColor,
    fontWeight: 'bold',
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: colorSchemeDark.backgroundColor,
    padding: 25,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 45,
    marginBottom: 30,
  },

  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  subtext: {
    fontSize: 16,
    color: colorSchemeDark.subtextColor,
  },
});

export {darkTheme, colorSchemeDark, satusBarDarkProps};
