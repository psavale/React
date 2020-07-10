import { combineReducers } from 'redux'
import { userList } from '../reducers/data'
import { ActiveUser } from './activeUserReducer'
import { iceCreamReducer } from '../reducers/iceCreamReducer'
import { cakeReducer } from '../reducers/cakeReducer'
import userReducer from '../reducers/userReducer'
import { todos } from '../reducers/todos'
import visibilityFilter from './visibilityFilter'

//use combineReducers to create a single root reducer out of many
export const rootReducer = combineReducers(
    {
        users: userList,
        activeUser: ActiveUser,
        iceCream: iceCreamReducer,
        cake: cakeReducer,
        user: userReducer,
        todos: todos,
        visibilityFilter: visibilityFilter

    }
)
