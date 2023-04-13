import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  saveView: {
    flex: 1,
  },
  container: {
    position: 'relative',
    width: '75%',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'space-between',
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
    left: 0,
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    width: '100%',
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    padding: 12,
  },
  descriptionContainer: {
    backgroundColor: '#F5FCFF',
    marginTop: 8,
  },
  infoText: {
    textAlign: 'center',
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    padding: 5,
  },
  container2: {
    position: 'relative',
    backgroundColor: '#F5FCFF',
    flex: 1,
    // Android requiers padding to avoid overlapping
    // with content and autocomplete
    paddingTop: 50,
    // Make space for the default top bar
    ...Platform.select({
      android: {
        marginTop: 25,
      },
      default: {
        marginTop: 0,
      },
    }),
  },
  SelectBox: {
    //Pressable
    width: '100%',
    height: 54,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  //   containercontainer: {
  //     justifyContent: 'space-between',
  //   },
});
