import {Text} from 'react-native';
import {defaultStyle} from '../styles';
import React from 'react';
interface LabelProps {
  value: string;
  inline?: number;
}
export const ContentTextComponent = (props: LabelProps) => {
  return (
    <Text style={[defaultStyle.textValue]} numberOfLines={props.inline}>
      {props.value}
    </Text>
  );
};
