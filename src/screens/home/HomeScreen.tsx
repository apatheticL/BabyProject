import {CompositeScreenProps, useIsFocused} from '@react-navigation/native';
import HomeComponent from './HomeComponent';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationParam} from '../../navigation/MainNavigation';
import {firebase} from '@react-native-firebase/auth';
import {User} from '../../core/model/user';
import {useDispatch, useSelector} from 'react-redux';
import {setUserProfile} from '../profile/store/reducer/action';
import {onThunkGetLastHeath} from '../health/store/thunk';
import {Health} from '../../core/model/health.model';
import {isEmpty} from '../../core/utils/utils';
type Props = CompositeScreenProps<
  NativeStackScreenProps<MainNavigationParam>,
  NativeStackScreenProps<MainNavigationParam, 'HomeScreen'>
>;
const HomeScreen = (props: Props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => {
    return state?.profileReducer ?? {};
  });
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
  };
  const onAddHealth = () => {
    props.navigation.navigate('AddHealthScreen');
  };
  const onHealthDetail = () => {
    props.navigation.navigate('HealthDetail', {healthId: health?.Id});
  };
  return (
    <HomeComponent
      health={health}
      onAddHealth={onAddHealth}
      onHealth={onHealthDetail}
    />
  );
};
export default HomeScreen;
