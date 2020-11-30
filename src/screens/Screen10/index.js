import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {bindCountActions} from '@actions';

class ScreenTen extends Component {
  componentDidMount() {
    console.log('Screen10 Mount()...');
  }

  componentWillUnmount() {
    console.log('Screen10 unMount()...');
    this.props.removeFromCounter();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>

        <Button
          title="Go back"
          onPress={() => {
            this.props.removeFromCounter();
            this.props.navigation.pop();
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

const matchStateToProps = (state) => {
  return {currentCount: state.countReducer.count};
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(bindCountActions, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(ScreenTen);
