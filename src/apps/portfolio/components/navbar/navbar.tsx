import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const { pathname } = useLocation(); 
    
    return (
    <div className="w-full px-20 py-6 flex justify-between">
      <span className="text-2xl font-bold ">Anwar Fauzi</span>
      <div className="flex gap-x-4">
        <Link
          id="home"
          to={'/home'}
          className={`${
            pathname.includes('/home')
              ? 'bg-gray-400/30 shadow-xl font-bold border border-gray-200'
              : 'bg-transparent font-semibold'
          } text-black rounded-full py-2 px-6`}
        >
          <span className="text-xs xl:text-sm">Home</span>
        </Link>
        <Link
          id="about"
          to={'/about'}
          className={`${
            pathname.includes('/about')
              ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
              : 'bg-transparent font-semibold'
          } text-black rounded-full py-2 px-6`}
        >
          <span className="text-xs xl:text-sm">About</span>
        </Link>
        <Link
          id="project"
          to={'/project'}
          className={`${
            pathname.includes('/project')
              ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
              : 'bg-transparent font-semibold'
          } text-black rounded-full py-2 px-6`}
        >
          <span className="text-xs xl:text-sm">Project</span>
        </Link>
        <Link
          id="contact"
          to={'/contact'}
          className={`${
            pathname.includes('/contact')
              ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
              : 'bg-transparent font-semibold'
          } text-black rounded-full py-2 px-6`}
        >
          <span className="text-xs xl:text-sm">Contact</span>
        </Link>
      </div>
    </div>
  );
};
