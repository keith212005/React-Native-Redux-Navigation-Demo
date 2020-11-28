import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

import {NavigationActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {StackActions} from '@react-navigation/native';

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
    console.log('Screen2 Mount()...');

    this.props.navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={{marginLeft: 5}}
          name="arrow-left"
          size={30}
          color="black"
          onPress={() => {
            // this.props.remove();
            this.props.navigation.pop();
          }}
        />
      ),
    });
  }

  componentWillUnmount() {
    console.log('Screen2 unMount()...');
    this.props.remove();
  }

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
