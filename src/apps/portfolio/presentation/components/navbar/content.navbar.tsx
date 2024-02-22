import { Link, useLocation } from 'react-router-dom';

const ContentNavbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Link
        id="home"
        to={'/home'}
        className={`${
          pathname == '/home'
            ? 'bg-gray-400/30 shadow-xl font-bold border border-gray-200'
            : 'bg-transparent font-semibold'
        } text-black rounded-full py-2 px-6 text-center`}
      >
        <span className="text-xs xl:text-sm text-white hover:font-bold">Home</span>
      </Link>
      <Link
        id="about"
        to={'/about'}
        className={`${
          pathname == '/about'
            ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
            : 'bg-transparent font-semibold'
        } text-black rounded-full py-2 px-6 text-center`}
      >
        <span className="text-xs xl:text-sm text-white hover:font-bold">About</span>
      </Link>
      <Link
        id="experience"
        to={'/experience'}
        className={`${
          pathname == '/experience'
            ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
            : 'bg-transparent font-semibold'
        } text-black rounded-full py-2 px-6 text-center`}
      >
        <span className="text-xs xl:text-sm text-white hover:font-bold">Experience</span>
      </Link>
      <Link
        id="project"
        to={'/project'}
        className={`${
          pathname == '/project'
            ? 'bg-gray-400/30 shadow-xl font-semibold border border-gray-200'
            : 'bg-transparent font-semibold'
        } text-black rounded-full py-2 px-6 text-center`}
      >
        <span className="text-xs xl:text-sm text-white hover:font-bold">Project</span>
      </Link>
    </>
  );
};

export default ContentNavbar;
