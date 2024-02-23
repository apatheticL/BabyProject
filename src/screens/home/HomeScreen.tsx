import {CompositeScreenProps, useIsFocused} from '@react-navigation/native';
import HomeComponent from './HomeComponent';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationParam} from '../../navigation/MainNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {onThunkGetLastHeath} from '../health/store/thunk';
import {Health} from '../../core/model/health.model';
import {isEmpty} from '../../core/utils/utils';
import {Schedule} from '../../core/model/schedule.model';
import {onThunkGetLastSchedule} from '../reminders/store/thunk';
type Props = CompositeScreenProps<
  NativeStackScreenProps<MainNavigationParam>,
  NativeStackScreenProps<MainNavigationParam, 'HomeScreen'>
>;
const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state?.profileReducer ?? {};
  });
  const [schedule, setSchedule] = React.useState<Schedule | undefined>(
    undefined,
  );

  const [health, setHealth] = React.useState<Health | undefined>(undefined);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && !isEmpty(user.currentUser.UserId)) {
      getHealthData(user.currentUser.UserId);
    }
  }, [isFocused, user.currentUser]);

  // get health data by user id
  const getHealthData = (userId: string) => {
    dispatch(
      onThunkGetLastHeath(
        userId,
        data => {
          setHealth(data);
        },
        () => {},
      ),
    );
    dispatch(
      onThunkGetLastSchedule(
        userId,
        data => {
          setSchedule(data);
        },
        () => {},
      ),
    );
  };
  const onAddHealth = () => {
    props.navigation.navigate('AddHealthScreen');
  };
  const onHealthDetail = () => {
    props.navigation.navigate('HealthDetail', {healthId: health?.Id});
  };
  const onHealthList = () => {
    props.navigation.navigate('HealthList');
  };
  //TODO: add result
  const onAddResult = () => {};
  const onAddSchedule = () => {
    props.navigation.navigate('AddSchedule');
  };
  const onScheduleList = () => {
    props.navigation.navigate('ScheduleList');
  };
  const onScheduleDetail = (schedule?: Schedule) => {
    __DEV__ && console.log('dev ~ onScheduleDetail ~ schedule:', schedule)
    props.navigation.navigate('ScheduleDetail', {scheduleId: schedule.Id});
  };

  return (
    <HomeComponent
      health={health}
      onAddHealth={onAddHealth}
      onHealth={onHealthDetail}
      onHealthList={onHealthList}
      currentUser={user.currentUser}
      onAddResult={onAddResult}
      onAddSchedule={onAddSchedule}
      onScheduleList={onScheduleList}
      onScheduleDetail={onScheduleDetail}
      reminder={schedule}
    />
  );
};
export default HomeScreen;
