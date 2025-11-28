import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ article }) {

  if (!article) return null;

  return (
    <Link href={`/news/${article.id}`} className="group">
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
        {/* Card Image */}
        <div className="relative w-full h-48">
          <Image 
            src={article.image} 
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-opacity"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-red-600 mb-1 uppercase">
            {article.category}
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
            {article.summary}
          </p>
          <p className="text-xs text-gray-400 mt-auto">
            {article.date}
          </p>
        </div>
      </div>
    </Link>
  );
}