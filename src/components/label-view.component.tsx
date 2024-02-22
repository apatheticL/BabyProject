import {View} from 'react-native';
import {defaultStyle} from '../styles';
import {BoxComponent} from './box.component';
import {LabelComponent} from './label.component';
import React from 'react';
interface LabelViewProps {
  label: string;
  children: React.ReactNode;
}
export const LabelViewComponent = (props: LabelViewProps) => {
  return (
    <View style={defaultStyle.marginLabel}>
      <LabelComponent label={props.label} />
      <BoxComponent />
      {props.children}
    </View>
  );
};
