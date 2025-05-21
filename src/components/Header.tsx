export default function Header() {
  return (
    <header className="bg-white py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <img
          src="public/greyLogo.png"
          alt="ArtSpace Logo grey"
          className="w-12 h-12"
        />
        <h1 className="text-5xl font-bold text-artspace">ArtSpace</h1>
      </div>
    </header>
  )
}



  