
import { GlobalConstants } from '../actions/actionTypes'

const initialState = {
    IceCreamInventory: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalConstants.BUY_ICE_CREAM: return {
            ...state,
            IceCreamInventory: state.IceCreamInventory - action.payload
        }

        default: return state

    }
};


