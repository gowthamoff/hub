'use client'
const Header = () => {
  return (
    <div className="flex justify-between pt-5 px-10 cursor-pointer flex-col md:flex-row gap-4 md:gap-0">
      <div className="hover:animate-pulse justify-center flex font-mono text-2xl font-semibold shadow-sm shadow-slate-50 bg-inherit px-2 rounded-lg">
        Farmify
      </div>
      <input
        type="text"
        className="text-black h-10  rounded-lg outline-none focus:outline-gray-100 px-2 text-center"
        placeholder="Search products..."
      />
      <div className="font-mono text-2xl text-center justify-center bg-slate-500 px-2 rounded-lg flex items-center font-semibold hover:bg-slate-400">
        Login
      </div>
    </div>
  )
}

export default Header
