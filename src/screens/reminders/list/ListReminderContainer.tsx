import {useEffect, useState} from 'react';
import {ListReminderComponent} from './ListReminderComponent';
import {Schedule} from '../../../core/model/schedule.model';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onThunkScheduleListByUser} from '../store/thunk';
import {isEmpty} from '../../../core/utils/utils';
import {LoadingComponent} from '../../../components/loading.component';
export const ListReminderContainer = props => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const dispatch = useDispatch();
  const user = useSelector(state => state?.profileReducer);
  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    if (!isEmpty(user.currentUser.UserId) && schedules.length === 0) {
      getData();
    }
  }, [schedules, user.currentUser]);
  __DEV__ &&
    console.log('', !isEmpty(user.currentUser.UserId), schedules.length === 0);
  const getData = () => {
    setLoading(true);
    dispatch(
      onThunkScheduleListByUser(
        user?.currentUser?.UserId,
        (_schedules: Schedule[]) => {
          setLoading(false);
          setSchedules(_schedules);
        },
        () => {
          setLoading(false);
        },
      ),
    );
  };
  const onSchedulePress = (schedule: Schedule) => {
    props.navigation.navigate('ScheduleDetail', {
      scheduleId: schedule.Id,
    });
  };
  return (
    <>
      {loading && <LoadingComponent />}
      <ListReminderComponent
        schedules={schedules}
        onSchedulePress={onSchedulePress}
        onAddSchedule={() => {
          props.navigation.navigate('AddSchedule');
        }}
      />
    </>
  );
};
