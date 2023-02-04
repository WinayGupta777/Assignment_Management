const setUser = (userInfo) => {
    return {
        type: "SET_USER",
        payload: userInfo
    }
};

export default setUser;