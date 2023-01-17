export enum AuthActionTypes {
  LOGIN = "login",
  LOGOUT = "logout",
}

export interface InitialState {
  isAuthenticated: boolean;
  authToken: string;
  user: {
    firstName: "";
    lastName: "";
  };
}
