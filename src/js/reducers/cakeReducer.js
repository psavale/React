import { BUY_CAKE } from '../actions/actionTypes'

const initialState = {
    cakeInventory: 10
}

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return (
            {
                ...state,
                cakeInventory: state.cakeInventory - action.payload
            })

        default: return state

    }
}