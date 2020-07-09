import { GlobalConstants } from '../actions/actionTypes'

export const todos = (state = [], action) => {
    switch (action.type) {
        case GlobalConstants.ADD_TODO: return [
            ...state, { text: action.payload.text, id: action.payload.id, completed: false }
        ]
        case GlobalConstants.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        default: return state;
    }
}