import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 120,
  },
  image: {
    height: 128,
    width: 128,
    marginBottom: 16,
  },

  signup: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 64,
    justifyContent: 'center',
    margin: 'auto',
    marginTop: 32,
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 32,
    marginTop: -16,
  },

  buttonLogin: {
    marginTop: 32,
    backgroundColor: colors.normalGreen,
    width: Dimensions.get('screen').width - 64,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
