
import Authentication from "./Authentication";
import { Navigate } from "react-router-dom";

function AuthenticateRoute (props){

    let isLoggedIn = Authentication.isUserLoggedIn();
    return isLoggedIn ? props.Children : <Navigate to="/"/>

}

export default AuthenticateRoute;