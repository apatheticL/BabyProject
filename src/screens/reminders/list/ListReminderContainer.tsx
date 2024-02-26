import {useEffect, useState} from 'react';
import {ListReminderComponent} from './ListReminderComponent';
import {Schedule} from '../../../core/model/schedule.model';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onThunkScheduleListByUser} from '../store/thunk';
import {isEmpty} from '../../../core/utils/utils';
export const ListReminderContainer = props => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const dispatch = useDispatch();
  const user = useSelector(state => state?.profileReducer);
  useEffect(() => {
    if (!isEmpty(user.currentUser.UserId) && schedules.length === 0) {
      getData();
    }
  }, [schedules, user.currentUser]);
  __DEV__ &&
    console.log('', !isEmpty(user.currentUser.UserId), schedules.length === 0);
  const getData = () => {
    dispatch(
      onThunkScheduleListByUser(
        user?.currentUser?.UserId,
        (_schedules: Schedule[]) => {
          setSchedules(_schedules);
        },
        () => {},
      ),
    );
  };
  const onSchedulePress = (schedule: Schedule) => {};
  return (
    <ListReminderComponent
      schedules={schedules}
      onSchedulePress={onSchedulePress}
    />
  );
};
