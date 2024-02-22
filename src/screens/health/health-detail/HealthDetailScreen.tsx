import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HealthDetailComponent} from './HealthDetailComponent';
import {Health} from '../../../core/model/health.model';
import {onThunkHealthDetail} from '../store/thunk';
import React from 'react';
export const HealthDetailContainer = props => {
  const healthId = props.route.params.healthId;
  __DEV__ && console.log('dev ~ HealthDetailContainer ~ healthId:', healthId)
  const [currentHealth, setCurrentHealth] = useState<Health | undefined>();
  const user = useSelector(state => state.profileReducer);
  const dispatch = useDispatch();

  __DEV__ && console.log(' user.currentUser.UserId',  user.currentUser.UserId);
  useEffect(() => {
    if (user.currentUser.UserId && healthId && currentHealth === undefined) {
      getHealth();
    }
  }, [currentHealth, healthId]);
  const getHealth = () => {
    dispatch(
      onThunkHealthDetail(
        user.currentUser.UserId,
        healthId,
        (health: Health) => {
          setCurrentHealth(health);
        },
        () => {},
      ),
    );
  };
  return (
    <HealthDetailComponent
      onBack={() => props.navigation.goBack()}
      currentHealth={currentHealth}
    />
  );
};
