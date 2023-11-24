import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route>
      {...rest}
      render ={" "}
      {(props) => {
        if (isAuth) {
          return <Component />;
        }
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    </Route>
  );
};

export default ProtectRoute;
