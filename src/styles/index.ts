import {StyleSheet} from 'react-native';
import {Color} from './color';

export const defaultStyle = StyleSheet.create({
  background: {
    backgroundColor: Color.Purple100,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1A1F52',
  },
  viewEditText: {
    borderColor: '#CCCEDF',
    borderRadius: 8,
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  textValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A1F52',
  },
  marginLabel: {marginBottom: 8, marginTop: 16},
  flex1: {flex: 1},
});
