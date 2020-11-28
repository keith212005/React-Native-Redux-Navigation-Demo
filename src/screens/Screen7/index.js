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

class ScreenSeven extends Component {
  componentDidMount() {
    console.log('Screen7 Mount()...');

    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={{marginLeft: 5}}
          name="arrow-left"
          size={30}
          color="black"
          onPress={() => {
            this.props.navigation.pop();
          }}
        />
      ),
    });
  }

  componentWillUnmount() {
    console.log('Screen7 unMount()...');
    this.props.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>

        <Button
          title="Screen 8"
          onPress={() => {
            this.props.add();
            this.props.navigation.navigate('ScreenEight');
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

export default connect(matchStateToProps, matchDispatchToProps)(ScreenSeven);
