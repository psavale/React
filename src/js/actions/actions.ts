import { createAction } from 'redux-actions';
import { GlobalConstants } from './actionTypes';

export const selectUser = createAction(GlobalConstants.USER_SELECTED, (user: object) => user);

export const iceCreamAction = createAction(
  GlobalConstants.BUY_ICE_CREAM,
  (iceCreamCount: number) => iceCreamCount
);

export const cakeAction = createAction(GlobalConstants.BUY_CAKE, (cakeCount: number) => cakeCount);

export const addToDo = createAction(GlobalConstants.ADD_TODO, (id: number, text: string) => ({ id, text }));

export const toggleTodo = createAction(GlobalConstants.TOGGLE_TODO, (id: number) => id);

export const setVisiblityFilter = createAction(GlobalConstants.SET_VISIBILITY_FILTER, (filter: string) => filter);