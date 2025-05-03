import { use, useState } from "react"
import { Link, useNavigate } from "react-router"
import { AuthContext } from "../../components/Context/AuthContext";

export const Register = ()=>{
    const {createUser , updateUserProfile} = use(AuthContext);
    const navigate = useNavigate();
    const [inputValue , setInputValue] = useState({
        name: "",
        photo: "",
        email: "",
        password: "",
    });


    const handleOnChange = (e)=>{
        const {name , value} = e.target ;
        setInputValue((prev)=> ({...prev , [name] : value}))
    }

    const handleFormRegister = (e)=>{
        e.preventDefault();

        createUser(inputValue.email , inputValue.password).then((result)=>{
           
            updateUserProfile({displayName:inputValue.name , photoURL: inputValue.photo}).then(()=>{
                navigate("/")
            }).catch((error)=>console.log(error.message))

        }).catch((error)=>console.log(error.message))
    }


    return(
        <>
           <section className=" h-[80vh] flex justify-center items-center">
           
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
               <h1 className=" text-3xl font-bold text-center">Register your account</h1>
             <div className="card-body">
               <form onSubmit={handleFormRegister} className="fieldset">

                 <label className="label">Name</label>
                 <input 
                 type="text" 
                 className="input"
                 name="name"
                 value={inputValue.name}
                 onChange={handleOnChange}
                 placeholder="Enter Your Name"
                 required />

                 <label className="label">Photo URL</label>
                 <input 
                 type="text"
                 className="input" 
                 name="photo"
                 value={inputValue.photo}
                 onChange={handleOnChange}
                 placeholder="Enter Your Photo URL" 
                 required/>

                 <label className="label">Email</label>
                 <input 
                 type="email" 
                 className="input" 
                 name="email"
                 value={inputValue.email}
                 onChange={handleOnChange}
                 placeholder="Email" 
                 required/>

                 <label className="label">Password</label>
                 <input 
                 type="password" 
                 className="input"
                 name="password" 
                 value={inputValue.password}
                 onChange={handleOnChange}
                 placeholder="Password" 
                 required/>

                 <button className="btn btn-neutral mt-4">Register</button>
               </form>
               <p>Already Have An Account ? <Link className="text-secondary font-medium" to="/auth/login">Login</Link></p>
             </div>
           </div>
          </section>
        </>
    )
}