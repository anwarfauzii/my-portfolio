import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full px-20 py-6 flex justify-between">
      <span className="text-2xl font-bold text-white">
        Anwar <span className="text-yellow-500">Fauzi</span>
      </span>
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
          <span className="text-xs xl:text-sm text-white hover:font-bold">Home</span>
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
          <span className="text-xs xl:text-sm text-white hover:font-bold">About</span>
        </Link>
        <Link
          id="experience"
          to={'/experience'}
          className={`${
            pathname.includes('/experience')
              ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
              : 'bg-transparent font-semibold'
          } text-black rounded-full py-2 px-6`}
        >
          <span className="text-xs xl:text-sm text-white hover:font-bold">Experience</span>
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
          <span className="text-xs xl:text-sm text-white hover:font-bold">Project</span>
        </Link>
      </div>
    </div>
  );
};
