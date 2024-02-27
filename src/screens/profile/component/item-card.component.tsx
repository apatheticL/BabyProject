import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../styles/color';
import {defaultStyle} from '../../../styles';
interface Props {
  icon: any;
  label: string;
  value?: string;
  onPress?: () => void;
  disable?: boolean;
}

export const ItemCardComponent = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.viewRow}
      disabled={props.disable}
      onPress={props.onPress}>
      {props.icon}
      <View style={defaultStyle.flex1}>
        <Text style={styles.titleItem}>{props.label}</Text>
        <Text style={styles.value}>{props.value ?? '...'}</Text>
      </View>
      {!props.disable && <Icon name="chevron-right" size={30} color="black" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCEDF',
  },
  titleItem: {
    fontSize: 16,
    marginLeft: 16,
    color: Color.MainText,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    marginLeft: 16,
    color: Color.MainText,
  },
});
