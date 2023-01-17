import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../context";

type IProps = { component: any; path: string };

const PublicRouter: React.FC<IProps> = ({ component, ...rest }: IProps) => {
  const { user } = useContext(AuthContext);
  const routeComponent = () => (user.isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/" />);
  return <Route {...rest} render={routeComponent} />;
};

export default PublicRouter;
