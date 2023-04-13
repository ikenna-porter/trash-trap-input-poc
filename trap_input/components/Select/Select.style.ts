// import {styled, css} from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  SelectBoxWrapper: {
    //SafeAreaView
    display: 'flex',
    flexDirection: 'column',
    width: 275,
    height: 86,
    marginBottom: 15,
  },
  SelectBoxHeader: {
    //Text
    width: '100%',
    height: 'auto',
    color: '#FFFFFF',
    marginBottom: 11,
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
  SelectText: {
    //Text
    marginLeft: 15,
    maxWidth: '80%',
    color: '#0A1520',
  },
  DropdownArrow: {
    //View
    width: 0,
    height: 0,
    marginRight: 15,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 11,
    borderRightWidth: 11,
    borderBottomWidth: 0,
    borderLeftWidth: 11,
    borderTopColor: '#297FD9',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});
