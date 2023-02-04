const initialState = {
    userInfo: {
        name: '',
        email: '',
        role: ''
    }
};

const userReducer = (state=initialState , action ) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                userInfo: action.payload
            }
        default: return state;
    }
}

export default userReducer;