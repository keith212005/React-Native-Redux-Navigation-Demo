import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {connect} from 'react-redux';
import * as Action from '@actions';

const matchStateToProps = (state) => {
  return {currentCount: state.countReducer.count};
};

const matchDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(Action.addToCounter()),
    remove: () => dispatch(Action.removeFromCounter()),
  };
};

class ScreenTwo extends Component {
  componentDidMount() {
    console.log('componentDidMount of screeen 2 called');
    this._unsubscribefocus = this.props.navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this._unsubscribeblur = this.props.navigation.addListener('blur', () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    });

    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={{marginLeft: 5}}
          name="arrow-left"
          size={30}
          color="black"
          onPress={() => {
            this.props.remove();
            this.props.navigation.pop();
          }}
        />
      ),
    });
  }

  componentWillUnmount() {
    this._unsubscribefocus();
    this._unsubscribeblur();
  }

  handleBackButton = () => {
    console.log('back button pressed in screen 2');
    this.props.remove();
    this.props.navigation.pop();
    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>

        <Button
          title="Screen 3"
          onPress={() => {
            this.props.add();
            this.props.navigation.navigate('ScreenThree');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(matchStateToProps, matchDispatchToProps)(ScreenTwo);
