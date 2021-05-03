import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';

export const Homestylesheet = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width - 32,
    height: 160,
    borderRadius: 32,
    paddingBottom: 0,
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 0,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  view: {
    backgroundColor: colors.darkGreen,
    alignSelf: 'flex-end',
    padding: 16,
    borderRadius: 32,
    borderTopLeftRadius: 0,
    borderBottomEndRadius: 0,
  },

  optionStyle: {
    width: 70,
    height: 70,
    backgroundColor: colors.opacityGreen,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
  },

  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 4,
    marginLeft: 4,
    marginTop: 8,
    marginBottom: 16,
  },

  inactiveDay: {
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    maxWidth: 50,
  },

  activeDay: {
    backgroundColor: colors.lightGreen,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    minWidth: 50,
    maxWidth: 50,
  },
});
