import { GlobalConstants } from '../actions/actionTypes'

const initialState = {
    cakeInventory: 10
}

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalConstants.BUY_CAKE: return (
            {
                ...state,
                cakeInventory: state.cakeInventory - action.payload
            })

        default: return state

    }
}