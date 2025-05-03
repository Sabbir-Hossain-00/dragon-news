import { NavLink } from "react-router"

export const Error = ()=>{
    return(
        <div className=" flex flex-col justify-center items-center gap-3 h-screen">
           <h1 className=" text-red-600 font-bold text-4xl">404 Error </h1>
           <p className="text-xs font-medium text-accent">Page not Found</p>
           <NavLink className="btn btn-secondary" to="/">Go Back to Home Page</NavLink>
        </div>
    )
}