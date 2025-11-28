import Layout from '../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { mockNews } from '../../data/mockNews';
import { useRouter } from 'next/router';

export default function ArticlePage({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="p-10 text-center">Loading article...</div>;
  }

  //Safety check
  if (!article) return null;

  return (
    <Layout>
      <Head>
        <title>{article.title} | Live Hindustan</title>
        <meta name="description" content={article.summary} />
      </Head>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
           <Link href="/" className="hover:text-red-600">Home</Link> &gt; 
           <span className="mx-1">{article.category}</span>
        </div>

        {/* Title & Meta */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6 pb-4 border-b">
           <span className="font-semibold text-red-600 mr-2">Live Hindustan Clone</span>
           <span>• {article.date}</span>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-64 md:h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image 
            src={article.image} 
            alt={article.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
           {/* Article Text */}
           <div className="md:col-span-8">
            <p className="text-xl font-semibold mb-6 text-gray-800">
              {article.summary}
            </p>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
              {/* Dynamic content from data */}
              <p>{article.content}</p>

              <p className="mt-4">
                The event drew crowds from all over the region, marking a significant milestone in recent history. 
                Experts analyze that this development will have lasting impacts on the local economy and community dynamics.
                "This is truly a game-changer," said one of the key organizers during the press conference.
              </p>
              <p className="mt-4">
                Authorities have assured the public that necessary measures are being taken to ensure smooth operations moving forward.
                The upcoming weeks will be crucial as new phases of the project are rolled out across the state.
                Observers are keen to see how the situation evolves in the coming days.
              </p>
            </div>
          </div>
           {/* Sidebar (Optional but good for layout) */}
           <div className="md:col-span-4 space-y-6">
              <div className="bg-gray-50 p-4 rounded border">
                 <h3 className="font-bold text-gray-900 mb-2">Read Next</h3>
                 <ul className="space-y-2 text-sm text-blue-600">
                    <li><Link href="/">• Top Market Trends</Link></li>
                    <li><Link href="/">• Election Updates 2024</Link></li>
                    <li><Link href="/">• World Cup Schedule</Link></li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}

// Get Static Paths
export async function getStaticPaths() {
  const paths = mockNews.map((article) => ({
    params: { id: article.id },
  }));

  return { 
    paths, 
    fallback: true 
  };
}

//Get Data for Single Page
export async function getStaticProps({ params }) {
  const article = mockNews.find((item) => item.id === params.id);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
    revalidate: 60, // Updates cache every 60 seconds (ISR)
  };
}