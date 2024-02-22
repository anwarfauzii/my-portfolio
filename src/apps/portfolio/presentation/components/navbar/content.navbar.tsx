import { Link, useLocation } from 'react-router-dom';

const ContentNavbar = ({ setOpenNav }: { setOpenNav?: Function }) => {
  const { pathname } = useLocation();

  const handleNavbar = () => {
    if (setOpenNav) {
      setOpenNav(false);
    }
  };

  return (
    <>
      <Link
        id="home"
        to={'/home'}
        onClick={handleNavbar}
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
        onClick={handleNavbar}
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
        onClick={handleNavbar}
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
        onClick={handleNavbar}
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
