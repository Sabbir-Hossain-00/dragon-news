import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"
import { CategoriyNewsCard } from "./CategoryNewsCard";

export const CategoryNews = ()=>{
    const [news , setNews] = useState([]);
    const newsData = useLoaderData();
    const {id} = useParams();

    


    useEffect(()=>{

        if(id == 0){
            setNews(newsData);
            return ;
        }
        
       if(id == 1){
        const breakingData = newsData.filter((curNews)=> curNews.others.is_today_pick === true);
        setNews(breakingData);
        return ;
       }
        
        

        const filteredData = newsData.filter((curNews)=> curNews.category_id == id);
        setNews(filteredData)
    },[newsData , id])
    return(
        <>
          <div className="space-y-10">
            {
                news.map((singleNews)=>{
                    return <CategoriyNewsCard key={singleNews.id} singleNews={singleNews}  />
                })
            }
          </div>
        </>
    )
}