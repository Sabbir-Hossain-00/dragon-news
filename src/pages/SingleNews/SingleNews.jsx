import { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router";

export const SingleNews = () => {
  const [news, setNews] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    const findedData = data.find((singleData) => singleData.id == id);
    setNews(findedData);
  }, [data, id]);

  return (
    <>
       <h1 className=" text-lg font-medium">Dragon News</h1>

       <div className=" bg-white rounded-lg shadow-md overflow-hidden mt-4">
        
      <img
        src={news.image_url}
        alt="News Thumbnail"
        className="w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {news.title}
        </h2>
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-3">
          {news.author?.img && (
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span>{news.author?.name}</span>
          <span>•</span>
          <span>
            {new Date(news.author?.published_date).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">{news.details}</p>
        <div className="flex flex-wrap gap-2 text-sm text-white">
          {news.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-600 px-3 py-1 rounded-full capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t text-right">
        <Link to={location.state} className="bg-secondary cursor-pointer hover:bg-pink-700 text-white px-4 py-2 rounded transition">
          ← All news in this category
        </Link>
      </div>
    </div>
    </>
  );
};
