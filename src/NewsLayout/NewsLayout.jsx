import { Outlet, useNavigation } from "react-router"
import { Header } from "../components/Header/Header"
import { RightAside } from "../components/RightAside/RightAside"
import { Loader } from "../pages/Loader/Loader";

export const NewsLayout = ()=>{
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loader/>
    }
    return(
        <>
          <header>
              <Header/>
          </header>
          <main className="container mx-auto px-4 grid grid-cols-12 gap-15">
            <section className=" col-span-9">
                <Outlet/>
            </section>
            <aside className="col-span-3">
             <RightAside/>
            </aside>
          </main>
        </>
    )
}