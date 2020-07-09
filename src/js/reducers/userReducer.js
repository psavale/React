import { GlobalConstants } from '../actions/actionTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalConstants.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GlobalConstants.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case GlobalConstants.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default userReducer
