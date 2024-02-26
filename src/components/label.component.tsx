import {StyleProp, Text, TextStyle} from 'react-native';
import {defaultStyle} from '../styles';
import React from 'react';
interface LabelProps {
  label: string;
  style?: StyleProp<TextStyle>;
}
export const LabelComponent = (props: LabelProps) => {
  return (
    <Text style={[defaultStyle.textTitle, props.style ? props.style : {}]}>
      {props.label}
    </Text>
  );
};
