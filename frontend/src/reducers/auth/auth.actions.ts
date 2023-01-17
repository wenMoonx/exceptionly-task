import { AuthActionTypes, InitialState } from "../../types/auth.d";

interface ILogin {
  type: AuthActionTypes.LOGIN;
  payload: InitialState;
}

interface ILogout {
  type: AuthActionTypes.LOGOUT;
  payload: InitialState;
}

export type Action = ILogin | ILogout;

export const loginAction = (payload: InitialState): ILogin => ({
  type: AuthActionTypes.LOGIN,
  payload,
});

export const logoutAction = (): ILogout => ({
  type: AuthActionTypes.LOGOUT,
  payload: {
    isAuthenticated: false,
    authToken: "",
    user: {
      firstName: "",
      lastName: "",
    },
  },
});
