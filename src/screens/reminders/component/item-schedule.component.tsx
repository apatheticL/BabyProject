import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Schedule} from '../../../core/model/schedule.model';
import {Color} from '../../../styles/color';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {defaultStyle} from '../../../styles';
import {BoxComponent} from '../../../components/box.component';
interface Props {
  schedule: Schedule;
  onPress?: (schedule: Schedule) => void;
}

export const ItemScheduleComponent = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress?.(props.schedule)}
      style={styles.container}>
      <View style={styles.itemRow}>
        <Text style={[styles.titleHeader, defaultStyle.flex1]}>
          {props.schedule.Date}
        </Text>
        {props.schedule.GestationalWeek.type === 1 && (
          <View style={styles.viewImportant}>
            <Text style={styles.txtImportant}>Important</Text>
          </View>
        )}
      </View>
      <BoxComponent style={styles.box} />
      <Text style={styles.titleItem}>
        {`${props.schedule.GestationalWeek.week} weeks`}
      </Text>
      <BoxComponent style={styles.box} />
      <View style={styles.itemRow}>
        <Icon
          name="map-marker"
          size={16}
          color={Color.Blue}
          style={styles.icon}
        />
        <Text style={styles.valueItem}>{props.schedule.Address}</Text>
      </View>
      {props.schedule.Note && (
        <View style={styles.itemRow}>
          <Icon
            name="note-text-outline"
            size={16}
            color={Color.Red}
            style={styles.icon}
          />
          <Text style={[styles.valueItem, {color: 'red'}]}>
            {props.schedule.Note}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {marginRight: 8},
  txtImportant: {color: 'white', fontSize: 12, fontWeight: '500'},
  box: {marginBottom: 8},
  itemRow: {flexDirection: 'row', alignItems: 'center'},
  viewImportant: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6900',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 16,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleItem: {
    color: Color.MainText,
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  valueItem: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  titleHeader: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
  },
});
