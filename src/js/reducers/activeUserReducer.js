import { GlobalConstants } from '../actions/actionTypes'

export const ActiveUser = (state = null, action) => {
    switch (action.type) {
        case GlobalConstants.USER_SELECTED:
            return action.payload;

        default: return state;
    }
}