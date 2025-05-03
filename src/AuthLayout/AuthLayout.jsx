import { Outlet, useNavigation } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import { Loader } from "../pages/Loader/Loader";

export const AuthLayout = ()=>{
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loader/>
    }
    return(
        <>
            <header className=" container mx-auto px-4">
              <Navbar/>
            </header>
            <main className="container mx-auto px-4">
                <Outlet/>
            </main>

        </>
    )
}