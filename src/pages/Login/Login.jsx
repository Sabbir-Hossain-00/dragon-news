import { use, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { AuthContext } from "../../components/Context/AuthContext";

export const Login = ()=>{
    const {signInUser , resetPassword} = use(AuthContext);
    const navigate = useNavigate()
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const location = useLocation();

    const handleFormLogin = (e)=>{
        e.preventDefault();

        signInUser(email , password).then((result)=>{
            navigate(location.state || '/')
        }).catch((error)=>console.log(error))
    }


    const handleResetPassword = ()=>{
      resetPassword(email).then(()=>{
        alert("password reset email sent !")
      }).catch((error)=>console.log(error.message))
    }


    return(
        <section className=" h-[80vh] flex justify-center items-center">
           
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
                  <h1 className=" text-3xl font-bold text-center">Login your account</h1>
                  <div className="card-body">
                    <form onSubmit={handleFormLogin} className="fieldset">

                      <label className="label">Email</label>
                      <input 
                      type="email" 
                      className="input" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required/>

                      <label className="label">Password</label>
                      <input 
                      type="password" 
                      className="input" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required/>

                      <div><a onClick={handleResetPassword} className="link link-hover">Forgot password?</a></div>
                      <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>Don't Have An Account ? <Link className="text-secondary font-medium" to="/auth/register">Register</Link></p>
                  </div>
                </div>
        </section>
    )
}