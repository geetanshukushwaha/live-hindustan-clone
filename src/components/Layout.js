import Navbar from './Navbar'; 
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Live Hindustan Clone</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar /> 
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
          <p>© 2025 Live Hindustan Clone Assignment</p>
        </footer>
      </div>
    </>
  );
}