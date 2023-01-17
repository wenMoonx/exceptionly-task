import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../context";
import Header from "../pages/header";

type IProps = { component: any; path: string };

const PrivateRouter: React.FC<IProps> = ({ component, ...rest }: IProps) => {
  const { user } = useContext(AuthContext);
  const routeComponent = (props: any) => (user.isAuthenticated ? React.createElement(component, props) : <Redirect to="/" />);
  return (
    <>
      <Header />
      <Route {...rest} render={routeComponent} />
    </>
  );
};

export default PrivateRouter;
