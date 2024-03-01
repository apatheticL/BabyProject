import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ChartComponent} from './component/ChartComponent';
import {ItemHealthComponent} from './component/ItemHealthComponent';
import {ItemReminderComponent} from './component/ItemReminderComponent';
import {defaultStyle} from '../../styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Health} from '../../core/model/health.model';
import {Schedule} from '../../core/model/schedule.model';
import {UserInfo} from '../../core/model/user-info.model';
interface Props {
  health?: Health;
  reminder?: Schedule;
  onHealth?: (health?: Health) => void;
  onAddHealth?: () => void;
  onHealthList?: () => void;
  currentUser: UserInfo;
  onAddSchedule?: () => void;
  loading?: boolean;
  loadingHealth?: boolean;
  onScheduleList?: () => void;
  onAddResult?: () => void;
  onScheduleDetail?: (schedule?: Schedule) => void;
}
const HomeComponent = (props: Props) => {
  return (
    <View style={[defaultStyle.background, {flex: 1}]}>
      <ChartComponent currentUser={props.currentUser} />
      <ItemHealthComponent
        healthModel={props.health}
        onAddHealth={props.onAddHealth}
        onHealth={props.onHealth}
        loading={props.loadingHealth}
      />
      <ItemReminderComponent
        reminder={props.reminder}
        onAddSchedule={props.onAddSchedule}
        onPress={props.onScheduleDetail}
        loading={props.loading}
      />
      <ActionButton buttonColor="rgba(231,76,60,1)" spacing={16}>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Health"
          onPress={() => {
            props.onAddHealth?.();
          }}>
          <Icon name="pencil-plus-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#f9b5c6"
          title="New Reminder"
          onPress={() => {
            props.onAddSchedule?.();
          }}>
          <Icon name="table-large-plus" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="New Result"
          onPress={() => {
            props.onAddResult?.();
          }}>
          <Icon
            name="checkbox-marked-circle-plus-outline"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#e7f08e"
          title="All health"
          onPress={() => {
            props.onHealthList?.();
          }}>
          <Icon name="format-list-checks" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="All Reminder"
          onPress={() => {
            props.onScheduleList?.();
          }}>
          <Icon name="format-list-text" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};
export default HomeComponent;
const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
