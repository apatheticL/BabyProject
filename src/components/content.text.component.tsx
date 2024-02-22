import {Text} from 'react-native';
import {defaultStyle} from '../styles';
import React from 'react';
interface LabelProps {
  value: string;
}
export const ContentTextComponent = (props: LabelProps) => {
  return <Text style={[defaultStyle.textValue]}>{props.value}</Text>;
};
