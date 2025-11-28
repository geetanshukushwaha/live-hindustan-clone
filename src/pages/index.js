import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import NewsCard from '../components/NewsCard';
import { mockNews } from '../data/mockNews';

export default function Home({ articles }) {
  // If data is missing, show a message
  if (!articles || articles.length === 0) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64 text-gray-500">
           No news articles found. Check data/mockNews.js
        </div>
      </Layout>
    );
  }

  //Split data: First item is Hero, rest are cards
  const topStory = articles[0];
  const otherStories = articles.slice(1);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Top Story (Hero) */}
        <section className="mb-10">
           <HeroSection article={topStory} />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main News Grid (Left side) */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 border-b-4 border-red-600 inline-block pb-1">
              Latest Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherStories.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar (Right side) - Static Content for "News Portal" feel */}
          <aside className="md:col-span-1">
            <div className="bg-gray-100 p-4 rounded shadow-sm sticky top-24">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Trending Now</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-sm text-gray-700 border-b pb-2">
                  <span className="text-red-600 font-bold">1.</span>
                  <a href="#" className="hover:text-red-600 hover:underline transition-colors">
                    Gold prices hit new all-time high
                  </a>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-700 border-b pb-2">
                  <span className="text-red-600 font-bold">2.</span>
                  <span>Weather alert: Heavy rains expected</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-700 border-b pb-2">
                  <span className="text-red-600 font-bold">3.</span>
                  <span>Tech giant announces new AI phone</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-gray-700 border-b pb-2">
                  <span className="text-red-600 font-bold">4.</span>
                  <span>Cricket match scheduled for Sunday</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-red-50 p-3 rounded border border-red-100 text-center">
                 <span className="text-xs font-bold text-red-600 uppercase">Advertisement</span>
                 <div className="h-32 bg-gray-200 mt-2 flex items-center justify-center text-gray-400 text-sm">
                    Ad Space
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

// Data Fetching (ISR)
export async function getStaticProps() {

  //return the mock data directly.
  return {
    props: {
      articles: mockNews,
    },
    revalidate: 60, // Re-generate page every 60 seconds
  };
}