import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { Loader } from "../../pages/Loader/Loader";

export const PrivateRoute = ({children})=>{

    const {user , loading} = use(AuthContext);
    const location = useLocation()

    if(loading){
        return <Loader/>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }

    return children ;
}