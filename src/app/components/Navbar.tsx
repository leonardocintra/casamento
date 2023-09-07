export default function Navbar() {
  return (
    <div className="flex items-center h-20 bg-slate-400">
      <div className="mx-auto relative px-5 max-w-screen-xl w-full items-center justify-end">
        <div className="text-4xl font-light text-white absolute left-1/2 top-1/2 -translate-x-1/2">
          Marília e Lucas
        </div>

        {/* Nav menu */}
        <nav className="text-white">
          <a href="http://">Home</a>
          <a href="http://">Home</a>
          <a href="http://">Home</a>

        </nav>
      </div>
    </div>
  )
}