import { combineReducers } from "redux";
import userReducer from "./currentUser/userReducer";

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;