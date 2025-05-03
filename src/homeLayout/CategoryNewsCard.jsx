import { FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export const CategoriyNewsCard = ({ singleNews }) => {
  const location = useLocation()
  const formattedDate = new Date(singleNews.author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="border border-base-300 rounded-xl p-4 shadow hover:shadow-md transition-all space-y-3">
      {/* Author Section */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img
            src={singleNews.author.img}
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">{singleNews.author.name}</p>
            <p className="text-xs text-gray-400">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <button><i className="ri-share-line"></i></button>
          <button><i className="ri-more-2-fill"></i></button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold text-gray-800">{singleNews.title}</h1>

      {/* Image */}
      <div className="w-full">
        <img
          src={singleNews.image_url}
          alt={singleNews.title}
          className="w-full object-cover rounded"
        />
      </div>

      {/* Details */}
      <p className="text-sm text-gray-600">
        {singleNews.details.length > 100
          ? singleNews.details.slice(0, 100) + "... "
          : singleNews.details}
        <Link state={location.pathname} to={`/news/${singleNews.id}`} className="text-blue-600 font-medium cursor-pointer">Read More</Link>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {"★★★★★".slice(0, Math.floor(singleNews.rating.number))}
          <span className="ml-1 text-gray-600">{singleNews.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};
