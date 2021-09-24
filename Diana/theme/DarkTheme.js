import {StyleSheet} from 'react-native';

const colorScheme = {
  backgroundColor: '#121212',
  primaryColor: '#06c',
  onPrimaryColor: '#fff',
  subtextColor: '#eee',
};

const statusBarProps = {
  backgroundColor: colorScheme.backgroundColor,
  barStyle: 'light-content',
};

const theme = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.backgroundColor,
  },

  header: {
    backgroundColor: colorScheme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },

  whiteIconHeader: {
    backgroundColor: colorScheme.backgroundColor,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },

  headerText: {
    backgroundColor: colorScheme.backgroundColor,
    color: colorScheme.onPrimaryColor,
    fontWeight: 'bold',
    fontSize: 30,
  },

  container: {
    flex: 1,
    backgroundColor: colorScheme.backgroundColor,
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
    color: colorScheme.subtextColor,
  },
});

export {theme, colorScheme, statusBarProps};
