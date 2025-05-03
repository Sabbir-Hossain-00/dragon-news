import { Suspense } from "react";
import { Categories } from "./Categories";
import { Loader } from "../../pages/Loader/Loader";

export const LeftAside = ()=>{

    const fetchingData = fetch("/categories.json").then((res)=> res.json());

    return(
        <>
          <h1 className=" text-base-content font-medium mb-5">All Categories</h1>

        <Suspense fallback = {<Loader/>} >
            <Categories fetchingData={fetchingData}/>
        </Suspense>
        </>

    )
}