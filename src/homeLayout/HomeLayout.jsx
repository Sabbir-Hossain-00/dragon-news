import { Outlet, useNavigation } from "react-router"
import { Header } from "../components/Header/Header"
import { Navbar } from "../components/Navbar/Navbar"
import { LeftAside } from "../components/LeftAside/LeftAside"
import { RightAside } from "../components/RightAside/RightAside"
import { Loader } from "../pages/Loader/Loader"

export const HomeLayout = ()=>{
   const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loader/>
    }
    return(
        <>
           <header>
                <Header/>
               <nav className="container mx-auto px-4">
                  <Navbar/>
               </nav>
           </header>
           <main className=" container mx-auto px-4 grid grid-cols-12 gap-5 mt-10">
              <aside className=" col-span-3">
                <LeftAside/>
              </aside>
              <section className="col-span-6">
               <Outlet/>
              </section>
              <aside className=" col-span-3">
                 <RightAside/>
              </aside>
           </main>

        </>
    )
}