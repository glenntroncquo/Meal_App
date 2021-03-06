import { Dimensions, StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({});

// TEXTSTYLES
export const textStyles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header2: {
    fontSize: 30,
    // fontWeight: ,
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

// Centered view
export const centeredStyle = StyleSheet.create({
  centeredView : {
    flex: 1,
    marginTop: 1280,
    justifyContent:'center',
    alignItems:'center'
  }
});

//NAVIGATION STYLING
export const navigationStyle = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
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
  test: {},
});

// TEXTINPUT STYLING

export const textInputStyle = StyleSheet.create({
  normal: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    fontSize:22,
    height: 54,
    width: Dimensions.get('screen').width-64,
    padding:8,
    marginBottom:16,
  },

  active: {
    borderBottomColor: colors.darkGreen,
    borderBottomWidth: 2,
    height: 54,
    width: Dimensions.get('screen').width-64,
    padding:8,
    fontSize:22,
    marginBottom:16,
  },
});

export default styles;
