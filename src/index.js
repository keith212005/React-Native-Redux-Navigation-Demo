import React from 'react';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {PersistGate} from 'redux-persist/integration/react';

import {StackNavigator} from '@navigator';
import {store, persistor} from '@reducers';

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
