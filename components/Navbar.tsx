export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            UM
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-slate-700">

          <a href="#">Home</a>

          <a href="#about">About</a>

          <a href="#experience">Experience</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl">
          Resume
        </button>

      </div>
    </nav>
  );
}