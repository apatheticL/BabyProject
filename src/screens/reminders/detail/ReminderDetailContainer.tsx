import {useDispatch, useSelector} from 'react-redux';
import {Schedule} from '../../../core/model/schedule.model';
import {ReminderDetailComponent} from './ReminderDetailComponent';
import React, {useEffect} from 'react';
import {onThunkAddResultSchedule, onThunkScheduleDetail} from '../store/thunk';
import {
  ExaminationResult,
  ExaminationResultRequest,
} from '../../../core/model/examination-result.model';
import {isEmpty} from '../../../core/utils/utils';
import {Alert} from 'react-native';
export const ReminderDetailContainer = props => {
  const scheduleId = props.route.params.scheduleId;
  const [schedule, setSchedule] = React.useState<Schedule | undefined>();
  const dispatch = useDispatch();
  const user = useSelector(state => state?.profileReducer);
  useEffect(() => {
    if (
      !isEmpty(user.currentUser.UserId) &&
      scheduleId &&
      schedule === undefined
    ) {
      onGetScheduleDetail();
    }
  }, [scheduleId, schedule, user.currentUser]);
  __DEV__ &&
    console.log(
      '',
      !isEmpty(user.currentUser.UserId),
      scheduleId,
      schedule === undefined,
    );

  const onGetScheduleDetail = () => {
    dispatch(
      onThunkScheduleDetail(
        user?.currentUser?.UserId,
        scheduleId,
        (_schedule: Schedule) => {
          __DEV__ &&
            console.log('dev ~ onGetScheduleDetail ~ _schedule:', _schedule);
          setSchedule(_schedule);
        },
        () => {},
      ),
    );
  };
  const onResultPress = (result: ExaminationResult) => {
    props.navigation.navigate('ResultScreen', {
      scheduleId: scheduleId,
      resultId: result.Id,
    });
  };

  const onSubmitResult = (request: ExaminationResultRequest) => {
    dispatch(
      onThunkAddResultSchedule(
        request,
        () => {
          __DEV__ && console.log('add done');
          onGetScheduleDetail();
        },
        () => {
          Alert.alert('Add result failed');
        },
      ),
    );
  };
  const onBack = () => {
    props.navigation.goBack();
  };
  return (
    <ReminderDetailComponent
      schedule={schedule}
      onBack={onBack}
      onResultPress={onResultPress}
      onSubmitResult={onSubmitResult}
      currentUser={user.currentUser}
    />
  );
};
