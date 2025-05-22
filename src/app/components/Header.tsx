
export default function Header() {
  return (
    <header className="bg-white py-6 px-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <img
          src="/pulic/greyLogo.png" 
          alt="ArtSpace Logo grey"
          className="w-12 h-12"
        />

        {/* Heading centered using absolute positioning */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold font-sans">
          ArtSpace
        </h1>
      </div>
    </header>
  );
}




  