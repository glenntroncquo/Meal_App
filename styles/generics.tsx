import { Dimensions, StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({});

// TEXTSTYLES
export const textStyles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  normal: {
    fontSize: 16,
  },
  normalBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  semi: {
    fontSize: 20,
  },

  semiBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

//CONTAINERS
export const container = StyleSheet.create({
  basicContainer: {
    padding: 16,
  },
  homeContainer: {
    padding: 16,
    paddingTop: 0,
  },
});

//NAVIGATION STYLING
export const navigationStyle = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
  },
});

//WEEKDAY STYLE
export const calendarStyle = StyleSheet.create({
  activeDay: {
    backgroundColor: colors.lightGreen,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    minWidth: 50,
    maxWidth: 50,
  },
  inactiveDay: {
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    maxWidth: 50,
  },
});

// CAROUSSEL STYLING

export const carouselStyle = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width - 32,
    height: 160,
    borderRadius: 32,
    paddingBottom: 0,
    flexDirection: 'row',
  },
});

// SEARCHBAR STYLING

export const searchBar = StyleSheet.create({
  style: {
    width: Dimensions.get('window').width - 32,
    backgroundColor: colors.opacityGray,
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  test : {
    
  }
});

export default styles;
