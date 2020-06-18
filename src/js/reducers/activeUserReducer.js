
export const ActiveUser = (state = null, action) => {

    console.log('active reducersss gets called', state, action.type);

    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;

        default: return state;
    }
}