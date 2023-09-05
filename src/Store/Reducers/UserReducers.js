import {
    LoginActionTypes,
    CLLER_ERRORS,
    RegisterActionTypes,
  } from '../Types/ActionTypes';
  
  export const userReducer = (
    state = { product: {} },
    action
  ) => {
    switch (action.type) {
      case LoginActionTypes.LOGIN_REQUEST:
      case RegisterActionTypes.REGISTER_REQUEST:

        return {
          loading: true,
          isAuthenticated: false,
        };
      case LoginActionTypes.LOGIN_SUCCESS:
      case RegisterActionTypes.REGISTER_SUCCESS:

        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
  
      case LoginActionTypes.LOGIN_FALL:
      case RegisterActionTypes.REGISTER_FALL:
        return {
          ...state,
          loading: false,
          user: null,
          isAuthenticated: false,
          error: action.payload,
        };
  
  
      case CLLER_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
 