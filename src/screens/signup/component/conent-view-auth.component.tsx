import {StyleSheet, View} from 'react-native';
import React from 'react';
interface ContentProps {
  children: React.ReactNode;
}
export const ContentViewAuthComponent = (props: ContentProps) => {
  return <View style={style.viewContent}>{props.children}</View>;
};
const style = StyleSheet.create({
  viewContent: {
    width: '100%',
    flex: 2,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
