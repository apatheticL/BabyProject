import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
interface CardProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

export const CardComponent = (props: CardProps) => {
  return (
    <View style={[styles.viewCard, props.customStyle ? props.customStyle : {}]}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  viewCard: {
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    width: '100%',
    padding: 16,
  },
});
