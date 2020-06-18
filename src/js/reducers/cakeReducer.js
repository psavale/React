import { BUY_CAKE } from '../actions/actionTypes'

const initialState={
    cakeInventory:10
}

export const cakeReducer = (state=initialState, action) => {

    console.log('cake reducer got called', action.type, "action payload"+action.payload);
    switch (action.type) {
        case BUY_CAKE: return (
            {
                ...state,
                cakeInventory: state.cakeInventory - action.payload
            })

        default: return state

    }
}