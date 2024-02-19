import { Outlet } from 'react-router-dom';
import { Navbar } from '../../apps/portfolio/components/navbar/navbar';

const RootLayout = () => {
  return (
    <div className="w-full h-screen relative" style={{ fontFamily: 'Noto+Sans, sans-serif' }}>
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>
      <div className="absolute inset-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
