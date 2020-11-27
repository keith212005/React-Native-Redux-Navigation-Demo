import React from 'react';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StackNavigator} from '@navigator';
import {countReducer, navigationReducer} from '@reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['countReducer', 'navigationReducer'], // only navigation will be persisted
  // blacklist: ['countReducer', 'navigationReducer'], // only navigation will be persisted
};

const rootReducer = combineReducers({
  countReducer: countReducer,
  navigationReducer: navigationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
