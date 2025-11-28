export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto border-t-4 border-red-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Live<span className="text-yellow-400">Hindustan</span> Clone
            </h2>
            <p className="mb-4">
              Your trusted source for the latest news, breaking stories, and in-depth analysis from around the world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Social/Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p>Email: editor@livehindustanclone.com</p>
            <p>Phone: +91 123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer">X</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">f</span>
              <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer">In</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2025 Live Hindustan Clone Assignment. All rights reserved.
        </div>
      </div>
    </footer>
  );
}