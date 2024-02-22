import {Text} from 'react-native';
import {defaultStyle} from '../styles';
import React from 'react';
interface LabelProps {
  label: string;
}
export const LabelComponent = (props: LabelProps) => {
  return <Text style={[defaultStyle.textTitle]}>{props.label}</Text>;
};
