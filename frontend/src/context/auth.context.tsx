import React, { useReducer, createContext, FC, useEffect } from "react";

import { initialState, initializer, AuthReducer } from "../reducers/auth/auth.reducer";
import { Action } from "../reducers/auth/auth.actions";
import { InitialState } from "../types/auth";

interface AuthContextData {
  user: InitialState;
  dispatchAuth: React.Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextData>({
  user: initialState,
  dispatchAuth: () => {},
});

const AuthContextProvider: FC = ({ children }) => {
  const [user, dispatchAuth] = useReducer(AuthReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(user));
  }, [user]);

  return <AuthContext.Provider value={{ user, dispatchAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
