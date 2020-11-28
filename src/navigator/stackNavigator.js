import React from 'react';

import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import * as Screen from '@screens';
import * as Action from '@actions';

const Stack = createStackNavigator();

const matchStateToProps = (state) => {
  return {navState: state.navigationReducer.navigationState};
};

const matchDispatchToProps = (dispatch) => {
  return {
    storeNavigationState: (state) => dispatch(Action.storeNavigation(state)),
  };
};

class StackNavigator extends React.Component {
  stack = (extraProps) => (
    <Stack.Screen
      name={extraProps.name}
      component={extraProps.component}
      options={{
        title: extraProps.title,
      }}
    />
  );

  render() {
    const stack = this.stack;

    return (
      <NavigationContainer
        initialState={this.props.navState}
        onStateChange={(state) => {
          this.props.storeNavigationState(state);
        }}>
        <Stack.Navigator initialRouteName="ScreenOne" unmountOnBlur={true}>
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
