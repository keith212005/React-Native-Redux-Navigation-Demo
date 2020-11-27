import * as Action from './actionTypes';

export const addToCounter = () => ({
  type: Action.INCREMENT_COUNT,
  data: null,
});

export const removeFromCounter = () => ({
  type: Action.DECREMENT_COUNT,
  data: null,
});
