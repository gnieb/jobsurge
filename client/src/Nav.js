import { NavLink } from "react-router-dom"

export default function Nav(){

    return(
      
        
        
        <nav className="flex items-center justify-between flex-wrap bg-black p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#a16207" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

    <span className="font-semibold text-xl tracking-tight">JOBSURGE</span>
  </div>
  {/* <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> */}
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
        <NavLink to="/" exact='true' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">HOME</NavLink>
        <NavLink to="/jobs" exact='true' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">JOBS</NavLink>
    </div>
  </div>
        </nav>
    )
}