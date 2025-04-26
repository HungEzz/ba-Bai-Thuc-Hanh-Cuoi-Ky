import React from 'react';

const NewsSection = ({ title, news, viewMoreLink }) => {
  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
        <h2 className="text-purple-900 font-bold">{title}</h2>
        <a href={viewMoreLink} className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
          xem tất cả
        </a>
      </div>
      <ul className="space-y-2">
        {news.map((item) => {
          // Check if the news item is recent (within 3 days)
          const isNew = item.date && new Date() - new Date(item.date.split('-').reverse().join('-')) < 3 * 24 * 60 * 60 * 1000;
          
          return (
            <li key={item.id} className="flex">
              <div className="flex-shrink-0 text-red-600 mr-1">▶</div>
              <div className="flex-1">
                <a href={item.link} className="hover:text-blue-800 text-sm">
                  {item.title}
                </a>
                <div className="flex items-center mt-1">
                  {item.date && (
                    <span className="text-xs text-gray-600">{item.date}</span>
                  )}
                  {isNew && (
                    <span className="ml-2 bg-red-600 text-white text-xs px-1 rounded">NEW</span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsSection; 