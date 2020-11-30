import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {bindCountActions} from '@actions';

class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Count: {this.props.currentCount}</Text>
        <Button
          title="Screen 2"
          onPress={() => {
            this.props.addToCounter();
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

const matchStateToProps = (state) => {
  return {currentCount: state.countReducer.count};
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(bindCountActions, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(ScreenOne);
