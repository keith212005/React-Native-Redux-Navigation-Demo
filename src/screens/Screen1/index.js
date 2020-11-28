import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

import {connect} from 'react-redux';

import * as Action from '@actions';

const matchStateToProps = (state) => {
  return {currentCount: state.countReducer.count};
};

const matchDispatchToProps = (dispatch) => {
  return {add: () => dispatch(Action.addToCounter())};
};

class ScreenOne extends Component {
  componentDidMount() {
    console.log('Screen1 Mounted()...');
  }

  componentWillUnmount() {
    console.log('Screen1 unmounted()...');
  }

  handleBackButton = () => {
    return true;
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>
        <Button
          title="Screen 2"
          onPress={() => {
            this.props.add();
            this.props.navigation.navigate('ScreenTwo');
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

export default connect(matchStateToProps, matchDispatchToProps)(ScreenOne);
