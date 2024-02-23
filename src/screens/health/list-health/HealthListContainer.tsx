import {useDispatch, useSelector} from 'react-redux';
import {HealthListComponent} from './HealthListComponent';
import React, {useEffect} from 'react';
import {onThunkHealthListByUser} from '../store/thunk';
import {groupHealthList, isEmpty} from '../../../core/utils/utils';
import {Health} from '../../../core/model/health.model';
export const HealthListContainer = props => {
  const user = useSelector(state => state?.profileReducer);
  const health = useSelector(state => state?.healthReducer);
  __DEV__ && console.log('dev ~ HealthListContainer ~ health:', health)
  const [healths, setHealths] = React.useState<
    {key: string; value: Health[]}[] | undefined
  >();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isEmpty(user.currentUser.UserId) && !healths) {
      onHealthList(user.currentUser.UserId);
    }
  }, [user.currentUser]);
  useEffect(() => {
    if (health?.healthList) {
      const result = groupHealthList(health.healthList);
      __DEV__ && console.log('a', JSON.stringify(result));
      setHealths(result);
    }
  }, [health?.healthList]);
  __DEV__ && console.log('health.healthReducer?.healthList', health.healthList);
  const onHealthList = (userId: string) => {
    dispatch(
      onThunkHealthListByUser(
        userId,
        _healths => {
          //   const result = groupHealthList(healths);
          //   __DEV__ && console.log('a', JSON.stringify(result));
          //   setHealths(result);
        },
        () => {},
      ),
    );
  };
  const onBack = () => {
    props.navigation.goBack();
  };
  const onHealthSelected = (_health: Health) => {
    props.navigation.navigate('HealthDetail', {healthId: _health.Id});
  };

  return (
    <HealthListComponent
      onBack={onBack}
      healthList={healths}
      onHealthSelected={onHealthSelected}
    />
  );
};
