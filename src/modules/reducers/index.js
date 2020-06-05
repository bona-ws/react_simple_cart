import {combineReducers} from "redux";

import {itemReducer} from "./itemReducer";
import {cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
  itemReducer,
  cartReducer
});

export default rootReducer;
