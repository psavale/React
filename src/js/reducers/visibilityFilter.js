import { VisibilityFilters, GlobalConstants } from '../actions/actionTypes'


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case GlobalConstants.SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state
    }
}

export default visibilityFilter
