import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducer/userReducers";
import {
  doctorLoginReducer,
  doctorRegisterReducer,
} from "./reducer/doctorReducers";
import { cartReducer } from "./reducer/cartReducers";
import {
  hospitalLoginReducer,
  hospitalRegisterReducer,
  hospitalManipulationReducer,
} from "./reducer/hospitalReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  hospitalLogin: hospitalLoginReducer,
  hospitalRegister: hospitalRegisterReducer,
  hospitalManipulation: hospitalManipulationReducer,
  doctorLogin: doctorLoginReducer,
  doctorRegister: doctorRegisterReducer,
  cart: cartReducer,
});

const cartFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cartItems: cartFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
