import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { VolunteerContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(VolunteerContext)
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
       loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;