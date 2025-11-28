import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Live<span className="text-yellow-400">Hindustan</span> Clone
          </Link>
          <div className="hidden md:flex space-x-6 font-medium">
             <Link href="/" className="hover:text-yellow-200 transition-colors">Home</Link>
             <Link href="#" className="hover:text-yellow-200 transition-colors">Tech</Link>
             <Link href="#" className="hover:text-yellow-200 transition-colors">Finance</Link>
             <Link href="#" className="hover:text-yellow-200 transition-colors">Sports</Link>
             <Link href="#" className="hover:text-yellow-200 transition-colors">Entertainment</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}