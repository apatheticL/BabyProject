import {View} from 'react-native';
import {defaultStyle} from '../styles';
import {BoxComponent} from './box.component';
import {LabelComponent} from './label.component';
import React from 'react';
import {ContentTextComponent} from './content.text.component';
interface LabelViewProps {
  label: string;
  value?: string | null;
}
export const LabelContentTextComponent = (props: LabelViewProps) => {
  return (
    <>
      {props.value ? (
        <View style={defaultStyle.marginLabel}>
          <LabelComponent label={props.label} />
          <BoxComponent />
          <ContentTextComponent value={props.value} />
        </View>
      ) : null}
    </>
  );
};
