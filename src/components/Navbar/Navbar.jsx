import { use } from "react"
import { Link, NavLink } from "react-router"
import { AuthContext } from "../Context/AuthContext"

import userPhoto from '../../assets/user.png'

export const Navbar = ()=>{

  const {user , signOutUser} = use(AuthContext)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    const handleLogOut = ()=>{
      signOutUser().then(()=>{
      
      }).catch((error)=>console.log(error))
    }
    return(
        <>
           <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                  </ul>
                </div>
                {
                  user && <div className="flex items-center gap-3"> 
                      <img className="w-10 rounded-full" src={user.photoURL ? user.photoURL : userPhoto} alt="" />
                      <h1 className="font-semibold text-lg">{user.displayName}</h1>
                  </div>
                }
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
              <div className="navbar-end">
                {
                  user ? <button onClick={handleLogOut} className="btn bg-primary text-base-100">Logout</button> : <Link to="/auth/login" className="btn bg-primary text-base-100">Login</Link>
                }
              </div>
            </div>
        </>
    )
}