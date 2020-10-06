const INITIAL_STATE = {
    username= '',
    password= '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username = action.payload}
        default:
            return INITIAL_STATE
    }
}

export default loginReducer