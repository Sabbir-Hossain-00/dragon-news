import { use } from "react"
import { Qzone } from "./Qzone"
import { Social } from "./Social"
import { SocialLogin } from "./SocialLogin"
import { AuthContext } from "../Context/AuthContext"

export const RightAside = ()=>{
  const {user} = use(AuthContext)
    return(
        <section className=" space-y-10">
          {
            !user && <SocialLogin/> 
          }
          <Social/>
          <Qzone/>
        </section>

    )
}