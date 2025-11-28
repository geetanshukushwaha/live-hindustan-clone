import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection({ article }) {
  
  if (!article) return null;

  return (
    <div className="mb-8">
      <Link href={`/news/${article.id}`} className="group block">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          {/* Main Image */}
          <Image 
            src={article.image} 
            alt={article.title}
            layout="fill"
            objectFit="cover"
            priority={true} 
            className="group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Dark Overlay for Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white">
            <span className="inline-block bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wider mb-2 rounded">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight group-hover:text-yellow-400 transition-colors">
              {article.title}
            </h1>
            <p className="hidden md:block mt-2 text-gray-200 line-clamp-2 text-sm opacity-90">
              {article.summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}