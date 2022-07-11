import { combineReducers } from "redux";
import productReducer from "./productRe";

const rootReducer = combineReducers({
    products: productReducer,

});

export default rootReducer;