const initialState = {
    userInfo: {
        name: 'Namor',
        email: 'nmr@g.com',
        role: 'fishKing'
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