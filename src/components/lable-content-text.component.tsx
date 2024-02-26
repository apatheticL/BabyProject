import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {defaultStyle} from '../styles';
import {BoxComponent} from './box.component';
import {LabelComponent} from './label.component';
import React from 'react';
import {ContentTextComponent} from './content.text.component';
interface LabelViewProps {
  label: string;
  value?: string | null;
  customStyle?: StyleProp<ViewStyle>;
  type?: 'Horizontal' | 'Vertical';
}
export const LabelContentTextComponent = (props: LabelViewProps) => {
  const style =
    props.type === 'Horizontal' ? styles.horizontal : styles.vertical;
  const viewBox = props.type === 'Horizontal' ? styles.view : {};
  return (
    <>
      {props.value ? (
        <View
          style={[
            defaultStyle.marginLabel,
            props.customStyle ? props.customStyle : {},
            style,
          ]}>
          <LabelComponent label={props.label} />
          <BoxComponent style={viewBox} />
          <ContentTextComponent value={props.value} />
        </View>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  view: {
    width: 16,
  },
});
