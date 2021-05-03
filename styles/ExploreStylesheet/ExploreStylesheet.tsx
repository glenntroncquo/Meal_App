import { StyleSheet } from 'react-native';
import colors from '../colors';

export const modalView = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 32,
  },
});

export const ExploreStylesheet = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: colors.opacityGray,
    height: 48,
    color: 'black',
    borderColor: 'white',
    paddingLeft: 16,
  },

  mealDetailView: {
    borderColor: colors.opacityGray,
    borderBottomWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 8,
  },
  buttonView: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
