import {useDispatch, useSelector} from 'react-redux';
import {AddReminderComponent} from './AddReminderComponent';
import React from 'react';
import {ScheduleRequest} from '../../../core/model/schedule.model';
import {isEmpty} from '../../../core/utils/utils';
import {onThunkAddSchedule} from '../store/thunk';
import {Alert} from 'react-native';
export const AddReminderContainer = props => {
  const user = useSelector(state => state?.profileReducer);
  const dispatch = useDispatch();
  const onSubmit = (schedule: ScheduleRequest) => {
    if (!isEmpty(user.currentUser?.UserId)) {
      dispatch(
        onThunkAddSchedule(
          schedule,
          () => {
            props.navigation.goBack();
          },
          () => {
            Alert.alert('Add reminder failed');
          },
        ),
      );
    }
  };
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <AddReminderComponent
      currentUser={user.currentUser}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
};
