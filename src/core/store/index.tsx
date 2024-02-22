import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import ReducerManager from './reducerManager';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Tuple, configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';
// Define your state shape
export interface RootState {}

let reducerManager: any = null;

let persistedReducer: any = null;

// @ts-ignore
export let store: Store<RootState, RootAction> | null = null;

export const addNewReducer = (name: string, reducer: any) => {
  if (reducerManager != null) {
    reducerManager.add(name, reducer);
    // @ts-ignore
    store.replaceReducer(persistedReducer);
  } else {
    console.warn('reducerManager is null');
  }
};

// @ts-ignore
export const addMultiNewReducer = (reducers: object[]) => {
  if (reducerManager != null) {
    reducerManager.addMulti(reducers);
    // @ts-ignore
    store.replaceReducer(persistedReducer);
  } else {
    console.warn('reducerManager is null');
  }
};

let persistor: any = null;

export const configStore = (rootReducers: any, storage: any) => {

  const persistConfig = {
    key: 'root',
    storage,
  };
  const initialReducers = {...rootReducers};

  reducerManager = new ReducerManager<any, any>(
    // @ts-ignore
    initialReducers,
  );
  persistedReducer = persistReducer(
    persistConfig,
    reducerManager?.getRootReducer(),
  );
  store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk, logger),
  });
  persistor = persistStore(store);
};

// @ts-ignore
const StoreProvider = ({children}) => {
  if (store == null) {
    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
    };
    persistedReducer = persistReducer(
      persistConfig,
      reducerManager?.getRootReducer(),
    );
    store = configureStore({
      reducer: persistedReducer,
      middleware: () => new Tuple(thunk, logger),
    });
  }
  if (persistor == null) {
    persistor = persistStore(store);
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
