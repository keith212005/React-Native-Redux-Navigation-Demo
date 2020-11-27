import * as Action from '@actions';

const initialState = {
  navigationState: undefined,
};

export default navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.STORE_NAVIGATION:
      return {
        navigationState: action.data,
      };

    default:
      return state;
  }
};
