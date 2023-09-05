import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userReducer
} from "./Store/Reducers/UserReducers";


const reduccer = combineReducers({
  user: userReducer
  
});

// @ts-ignore
let initialState = {
 
};
const middleware = [thunk];

const store = createStore(
  reduccer,
  // @ts-ignore
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
