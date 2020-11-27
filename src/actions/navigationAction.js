import * as Action from './actionTypes';

export const storeNavigation = (navStateObject) => {
  return {
    type: Action.STORE_NAVIGATION,
    data: navStateObject,
  };
};
