import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface ItemSettingProps {
  nameIcon: string;
  colorIcon?: string;
  title: string;
  onPress: () => void;
  isLastItem?: boolean;
}
export const ItemSetting = (props: ItemSettingProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.viewContainer,
        props.isLastItem
          ? {}
          : {borderBottomColor: '#EEF1F3', borderBottomWidth: 1},
      ]}
      onPress={props.onPress}>
      <View style={styles.itemView}>
        <Icon
          style={styles.icon}
          name={props.nameIcon}
          size={24}
          color={props.colorIcon ?? 'gray'}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Icon name="chevron-right" size={30} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});
