import {CompositeScreenProps, useIsFocused} from '@react-navigation/native';
import HomeComponent from './HomeComponent';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationParam} from '../../navigation/MainNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {onThunkGetLastHeath} from '../health/store/thunk';
import {Health} from '../../core/model/health.model';
import {getGestationalOld, isEmpty} from '../../core/utils/utils';
import {Schedule} from '../../core/model/schedule.model';
import {onThunkGetLastSchedule} from '../reminders/store/thunk';
import {firebase} from '@react-native-firebase/auth';
import {setUserProfile} from '../profile/store/reducer/action';
import {onThunkUpdateGestationalAge} from '../profile/store/thunk';
import { NotificationService } from '../../core/services/notification.service';

type Props = CompositeScreenProps<
  NativeStackScreenProps<MainNavigationParam>,
  NativeStackScreenProps<MainNavigationParam, 'HomeScreen'>
>;
const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [loadingHealth, setLoadingHealth] = React.useState<boolean>(true);
  const user = useSelector(state => {
    return state?.profileReducer ?? {};
  });
  const [schedule, setSchedule] = React.useState<Schedule | undefined>(
    undefined,
  );
  const {currentUser} = firebase.auth();
  const [health, setHealth] = React.useState<Health | undefined>(undefined);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    NotificationService.getInstance().requestPermission();
    if (isFocused && !isEmpty(user.currentUser.UserId)) {
      getHealthData(user.currentUser.UserId);
    }
  }, [isFocused, user.currentUser]);

  useEffect(() => {
    if (!isEmpty(user.user?.uid) && currentUser) {
      const value = {
        email: currentUser.email,
        uid: currentUser.uid,
        phoneNumber: currentUser.phoneNumber,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        providerId: currentUser.providerId,
        emailVerified: currentUser.emailVerified,
        isAnonymous: currentUser.isAnonymous,
        metadata: currentUser.metadata,
      };
      dispatch(setUserProfile(value));
    }
  }, [currentUser]);

  useEffect(() => {
    const GestationalAge = getGestationalOld(user.currentUser.DueDate);
    if (
      !isEmpty(user.currentUser.UserId) &&
      (GestationalAge.weeks !== user.currentUser.GestationalAge.weeks ||
        GestationalAge.days !== user.currentUser.GestationalAge.days)
    ) {
      onUpdate(GestationalAge);
    }
  }, [isFocused]);

  const onUpdate = (GestationalAge: any) => {
    dispatch(
      onThunkUpdateGestationalAge(
        GestationalAge,
        user.currentUser.UserId,
        () => {},
        () => {},
      ),
    );
  };

  // get health data by user id
  const getHealthData = (userId: string) => {
    setLoadingHealth(true);
    dispatch(
      onThunkGetLastHeath(
        userId,
        data => {
          setHealth(data);
          setLoadingHealth(false);
        },
        () => {
          setLoadingHealth(false);
        },
      ),
    );
    setLoading(true);
    dispatch(
      onThunkGetLastSchedule(
        userId,
        data => {
          setSchedule(data);
          setLoading(false);
        },
        () => {
          setLoading(false);
        },
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
    props.navigation.navigate('ScheduleDetail', {scheduleId: schedule.Id});
  };

  return (
    <>
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
        loading={loading}
        loadingHealth={loadingHealth}
        reminder={schedule}
      />
    </>
  );
};
export default HomeScreen;
