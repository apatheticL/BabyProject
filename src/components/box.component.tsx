import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
interface BoxProps {
  style?: StyleProp<ViewStyle>;
}
export const BoxComponent = (props: BoxProps) => {
  return <View style={[styles.defaultStyle, props.style ? props.style : {}]} />;
};
const styles = StyleSheet.create({
  defaultStyle: {marginBottom: 8},
});
