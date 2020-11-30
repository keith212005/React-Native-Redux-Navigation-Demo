import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

import {NavigationActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {StackActions} from '@react-navigation/native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {bindCountActions} from '@actions';

class ScreenTwo extends Component {
  componentDidMount() {
    console.log('Screen2 Mount()...');
  }

  componentWillUnmount() {
    console.log('Screen2 unMount()...');
    this.props.removeFromCounter();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>

        <Button
          title="Screen 3"
          onPress={() => {
            this.props.addToCounter();
            this.props.navigation.navigate('ScreenThree');
          }}
        />
      </View>
    );
  }
}

const matchStateToProps = (state) => {
  return {currentCount: state.countReducer.count};
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(bindCountActions, dispatch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(matchStateToProps, matchDispatchToProps)(ScreenTwo);
