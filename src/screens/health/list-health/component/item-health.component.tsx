import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Health} from '../../../../core/model/health.model';
import {defaultStyle} from '../../../../styles';
import {IconHealthComponent} from '../../component/icon-health.component';
import {BoxComponent} from '../../../../components/box.component';
import React from 'react';
interface ItemProps {
  health: Health;
  onHealth?: (health: Health) => void;
}

export const ItemHealthComponent = (props: ItemProps) => {
  return (
    <TouchableOpacity
      style={[defaultStyle.flex1, styles.viewContent]}
      activeOpacity={0.7}
      onPress={() => props.onHealth?.(props.health)}>
      <View style={styles.viewItem}>
        {/* <View style={{width: 100}}> */}
        <IconHealthComponent
          iconId={props.health.iconId ?? 0}
          style={styles.icon}
          styleContainer={styles.viewIcon}
        />
        <BoxComponent style={styles.box} />
        {/* </View> */}
        <Text style={styles.txtValue}>{props.health.Description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  txtValue: {fontWeight: '400', fontSize: 16, color: '#1A1F52'},
  viewContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewItem: {
    borderColor: '#CCCEDF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    width: 150,
  },
  viewIcon: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
  },
  icon: {width: 100, height: 60, resizeMode: 'contain'},
  box: {height: 8},
});
