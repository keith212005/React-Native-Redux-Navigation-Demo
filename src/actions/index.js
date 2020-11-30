import * as countActions from './countAction';

export {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  STORE_NAVIGATION,
} from './actionTypes';
export {storeNavigation} from './navigationAction';

export const bindCountActions = Object.assign({}, countActions);

// console.log('bindCountActions = ' + JSON.stringify(bindCountActions));
