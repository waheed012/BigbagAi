import axios from 'axios';
import {
  LoginActionTypes,
  CLLER_ERRORS,
  RegisterActionTypes,
} from '../Types/ActionTypes';

// ........................................................loginaction

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LoginActionTypes.LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/login',
      {
        email,
        password,
      },
      config
    );
    dispatch({
      type: LoginActionTypes.LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LoginActionTypes.LOGIN_FALL,
     
      payload: error.response.data.message,
    });
  }
};

// ?????????????????????????????????RegisterAction

export const RegisterAction = (

  name,

  email,

  password

) =>

  async (dispatch) => {
    try {
      dispatch({
        type: RegisterActionTypes.REGISTER_REQUEST,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/register',
        {
          name,
          email,
          password,
        },
        config
      );
      dispatch({
        type: RegisterActionTypes.REGISTER_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: RegisterActionTypes.REGISTER_FALL,
       
        payload: error.response.data.message,
      });
    }
  };

  export const clearError = () => async (dispatch) => {
    dispatch({ type: CLLER_ERRORS });
  };