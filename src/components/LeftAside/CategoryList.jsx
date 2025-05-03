import { NavLink } from "react-router"

export const CategoryList = ({singleCat})=>{
    return(
        <> 
          <NavLink 
          to={`/category/${singleCat.id}`}
           className={({isActive})=> isActive? "btn bg-base-300 border-0 shadow-none hover:bg-base-300 w-full" : "btn bg-base-100 border-0 shadow-none hover:bg-base-300 w-full" } 
          key={singleCat.id}>{singleCat.name}</NavLink>
        </>
    )
}