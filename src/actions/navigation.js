import * as Action from './actionTypes';

export const storeNavigation = (navStateObject) => {
  console.log('navStateObject' + JSON.stringify(navStateObject));
  return {
    type: Action.STORE_NAVIGATION,
    data: navStateObject,
  };
};
