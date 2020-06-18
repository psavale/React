import {createAction} from 'redux-actions';
import { BUY_ICE_CREAM, BUY_CAKE, USER_SELECTED } from './actionTypes';

export const selectUser = createAction(USER_SELECTED, (user: object) => user);

export const iceCreamAction = createAction(
  BUY_ICE_CREAM,
  (iceCreamCount: number) => iceCreamCount
);

export const cakeAction = createAction(BUY_CAKE, (cakeCount: number) => cakeCount);
