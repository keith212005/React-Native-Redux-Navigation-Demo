import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import countReducer from './countReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  countReducer: countReducer,
  navigationReducer: navigationReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['countReducer', 'navigationReducer'], // only navigation will be persisted
  // blacklist: ['countReducer', 'navigationReducer'], // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
