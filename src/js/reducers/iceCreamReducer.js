
import { BUY_ICE_CREAM } from '../actions/actionTypes'

const initialState={
    IceCreamInventory:20
}

export const iceCreamReducer = (state=initialState, action) => {   
    console.log('iceCream reducer got called', action.type);
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            IceCreamInventory: state.IceCreamInventory - action.payload
        }

        default: return state

    }
};


