import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        
        {/* Left Nav Links */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-gray-300 font-medium border-b-2 border-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Logo (Center) */}
        <div className="text-2xl font-bold tracking-widest font-handwriting">
          LOVE BIRYANI
        </div>

        {/* Search Bar (Right) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 rounded-full text-black focus:outline-none"
          />
          <span className="absolute right-3 top-1.5 text-gray-500 cursor-pointer">
            🔍
          </span>
        </div>
      </div>
    </header>
  );
}
