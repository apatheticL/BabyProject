import {HealthRequest} from '../../../core/model/health.model';
import {onThunkAddHealth} from '../store/thunk';
import {AddHealthComponent} from './AddHealthComponent';
import React from 'react';
import {useDispatch} from 'react-redux';

export const AddHealthContainer = props => {
  const dispatch = useDispatch();
  const onAddHealthPress = (model: HealthRequest) => {
    __DEV__ && console.log('model', model);
    dispatch(
      onThunkAddHealth(
        model,
        () => {
          __DEV__ && console.log('add health success');
          props.navigation.navigate('HomeScreen');
        },
        () => {
          __DEV__ && console.log('add health fail');
        },
      ),
    );
  };
  const onBackPress = () => {
    props.navigation.goBack();
  };
  return (
    <AddHealthComponent onSubmit={onAddHealthPress} onBack={onBackPress} />
  );
};
