import * as Action from '@actions';

const initialState = {
  count: 1,
};

export default countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.INCREMENT_COUNT:
      return {
        count: state.count + 1,
      };
    case Action.DECREMENT_COUNT:
      // console.log('Action.DECREMENT_COUNT called...');
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
