import React from 'react';

import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import * as Screen from '@screens';
import * as Action from '@actions';

const Stack = createStackNavigator();
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const matchStateToProps = (state) => {
  return {navState: state.navigationReducer.navigationState};
};

const matchDispatchToProps = (dispatch) => {
  return {
    storeNavigationState: (state) => dispatch(Action.storeNavigation(state)),
  };
};

class StackNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  stack = (extraProps) => (
    <Stack.Screen
      name={extraProps.name}
      component={extraProps.component}
      options={{
        title: extraProps.title,
      }}
    />
  );

  async componentDidMount() {
    if (!this.state.isReady) {
      this.restoreState();
    }
  }

  restoreState = async () => {
    try {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      const stateObject = savedStateString
        ? JSON.parse(savedStateString)
        : undefined;

      if (stateObject !== undefined) {
        // console.log(
        //   'STATE HAS VALUE NEW STATE =  ' + JSON.stringify(stateObject),
        // );
      } else {
        // console.log('state has no value');
      }
    } finally {
      this.setState({
        isReady: true,
      });
    }
  };

  render() {
    const stack = this.stack;
    if (!this.state.isReady) {
      return null;
    }

    return (
      <NavigationContainer
        initialState={this.props.navState}
        onStateChange={(state) => {
          this.props.storeNavigationState(state);
        }}>
        <Stack.Navigator initialRouteName="ScreenOne">
          {stack({
            name: 'ScreenOne',
            component: Screen.ScreenOne,
            title: 'Screen One',
          })}
          {stack({
            name: 'ScreenTwo',
            component: Screen.ScreenTwo,
            title: 'Screen Two',
          })}
          {stack({
            name: 'ScreenThree',
            component: Screen.ScreenThree,
            title: 'Screen Three',
          })}
          {stack({
            name: 'ScreenFour',
            component: Screen.ScreenFour,
            title: 'Screen Four',
          })}
          {stack({
            name: 'ScreenFive',
            component: Screen.ScreenFive,
            title: 'Screen Five',
          })}
          {stack({
            name: 'ScreenSix',
            component: Screen.ScreenSix,
            title: 'Screen Six',
          })}
          {stack({
            name: 'ScreenSeven',
            component: Screen.ScreenSeven,
            title: 'Screen Seven',
          })}
          {stack({
            name: 'ScreenEight',
            component: Screen.ScreenEight,
            title: 'Screen Eight',
          })}
          {stack({
            name: 'ScreenNine',
            component: Screen.ScreenNine,
            title: 'Screen Nine',
          })}
          {stack({
            name: 'ScreenTen',
            component: Screen.ScreenTen,
            title: 'Screen Ten',
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(StackNavigator);
