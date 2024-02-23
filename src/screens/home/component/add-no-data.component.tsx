import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  title: string;
  labelButton: string;
  onPress?: () => void;
  styleButton?: StyleProp<ViewStyle>;
}
export const AddNoDataComponent = (props: Props) => {
  return (
    <View style={styles.viewNoData}>
      <Text style={styles.txtNodata}>{props.label}</Text>
      <Text style={styles.txtSubtitleNoData}>{props.title}</Text>
      <TouchableOpacity
        style={[
          styles.btnAddhealth,
          props.styleButton ? props.styleButton : {},
        ]}
        activeOpacity={0.7}
        onPress={props.onPress}>
        <Text style={styles.txtAddHealth}>{props.labelButton}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewNoData: {justifyContent: 'center', alignItems: 'center'},
  txtNodata: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  txtSubtitleNoData: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    marginTop: 8,
  },
  txtAddHealth: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  btnAddhealth: {
    backgroundColor: '#98dcfa',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 8,
    width: 140,
  },
});
