import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
