import { use } from "react"
import { CategoryList } from "./CategoryList";

export const Categories = ({fetchingData})=>{
    const categoriesData = use(fetchingData);
    return(
        <>
        <div className=" flex flex-col justify-center items-start gap-3">
         {
            categoriesData.map((singleCat)=>{
                return <CategoryList key={singleCat.id} singleCat={singleCat}/>
            })
           }
        </div>
           
        </>
    )
}