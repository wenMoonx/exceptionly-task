import { Action } from './auth.actions';
import { AuthActionTypes, InitialState } from '../../types/auth.d';

export const initialState: InitialState = {
  isAuthenticated: false,
  authToken: '',
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
};
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem('auth') || '{}') || initialValue;

export const AuthReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        isAuthenticated: true,
        authToken: action.payload.authToken,
        user: action.payload.user,
      };
    case AuthActionTypes.LOGOUT:
      return {
        isAuthenticated: false,
        authToken: '',
        user: {
          firstName: '',
          lastName: '',
          email: '',
        }, //fsdf
      };
    default:
      return state;
  }
};
