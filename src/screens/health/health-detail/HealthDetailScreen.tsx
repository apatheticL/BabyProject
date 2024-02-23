import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HealthDetailComponent} from './HealthDetailComponent';
import {
  Health,
  HealthStatus,
  HealthStatusRequest,
} from '../../../core/model/health.model';
import {
  onThunkAddStatusHealth,
  onThunkHealthDetail,
  onThunkRemoveStatusHealth,
} from '../store/thunk';
import React from 'react';
import database from '@react-native-firebase/database';

export const HealthDetailContainer = props => {
  const healthId = props.route.params.healthId;
  const [currentHealth, setCurrentHealth] = useState<Health | undefined>();
  const user = useSelector(state => state.profileReducer);
  const [healthStatus, setHealthStatus] = useState<HealthStatus[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.currentUser.UserId && healthId && currentHealth === undefined) {
      getHealth();
    }
  }, [currentHealth, healthId]);
  /*
    listener for additional information change value
  */
  useEffect(() => {
    const onValueChange = database()
      .ref(`/health/${user.currentUser.UserId}/${healthId}/additionalInfo`)
      .on('value', snapshot => {
        if (snapshot.exists()) {
          setHealthStatus(Object.values(snapshot.val()));
        }
      });

    // Stop listening for updates when no longer required
    return () =>
      database()
        .ref(`/health/${user.currentUser.UserId}/${healthId}/additionalInfo`)
        .off('value', onValueChange);
  }, []);

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

  const additionalInformation = (status: HealthStatusRequest) => {
    dispatch(
      onThunkAddStatusHealth(
        user.currentUser.UserId,
        healthId,
        status,
        (_health: HealthStatus) => {
          __DEV__ && console.log('add health success', _health);
        },
        () => {},
      ),
    );
  };
  const removeHealthStatus = (status: HealthStatus) => {
    dispatch(
      onThunkRemoveStatusHealth(
        user.currentUser.UserId,
        healthId,
        status.Id,
        () => {
          __DEV__ && console.log('remove health success');
        },
        () => {},
      ),
    );
  };

  return (
    <HealthDetailComponent
      onBack={() => props.navigation.goBack()}
      currentHealth={currentHealth}
      healthStatus={healthStatus}
      onAdditionalInformation={additionalInformation}
      onRemoveHealthStatus={removeHealthStatus}
    />
  );
};
