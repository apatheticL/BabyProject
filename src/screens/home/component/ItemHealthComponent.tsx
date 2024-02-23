import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Health} from '../../../core/model/health.model';
import {Color} from '../../../styles/color';
import {IconHealthComponent} from '../../health/component/icon-health.component';
import {AddNoDataComponent} from './add-no-data.component';
interface ItemHealthComponentProps {
  healthModel?: Health;
  onAddHealth?: () => void;
  onHealth?: (healthModel?: Health) => void;
}
export const ItemHealthComponent = (props: ItemHealthComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.title}>Your Health</Text>
        {props.healthModel ? (
          <Text style={styles.viewAll}>View all</Text>
        ) : null}
      </View>
      {props.healthModel ? (
        <TouchableOpacity
          style={styles.viewContainer}
          activeOpacity={0.7}
          onPress={() => props.onHealth?.(props.healthModel)}>
          <IconHealthComponent iconId={props.healthModel.iconId ?? 0} />

          <View style={styles.viewContent}>
            <Text style={styles.name}>{props.healthModel.Description}</Text>
            <Text style={styles.dateTitle}>
              Date: <Text style={styles.date}>{props.healthModel.Date}</Text>
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <AddNoDataComponent
          label="No health information"
          title="Please add your health information"
          labelButton="Add health"
          onPress={props.onAddHealth}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  viewContent: {flex: 1, justifyContent: 'center', marginLeft: 8},

  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    borderColor: '#EEF1F3',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  viewIcon: {
    backgroundColor: '#b5f2b7',
    borderRadius: 32,
    padding: 14,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: Color.MainText,
    fontWeight: '600',
    marginBottom: 8,
    flex: 1,
  },
  viewAll: {
    fontSize: 12,
    color: '#4A47BD',
    fontWeight: '500',
    marginBottom: 8,
    // textDecorationLine: 'underline',
  },
  name: {
    color: 'black',
    fontSize: 16,
  },
  dateTitle: {
    color: 'black',
    fontSize: 14,
  },
  date: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
