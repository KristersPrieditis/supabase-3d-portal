export default function Navbar() {
    return (
      <nav className="flex flex-wrap justify-between bg-gray-800 text-white px-4 py-3 mt-4">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
          <a href="#" className="hover:text-gray-300">Link</a>
        </div>
        <a href="#" className="hover:text-gray-300">Right Link</a>
      </nav>
    );
  }
  