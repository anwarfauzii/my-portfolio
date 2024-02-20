import { Outlet } from 'react-router-dom';
import { Navbar } from '../../apps/portfolio/components/navbar/navbar';

const RootLayout = () => {
  return (
    <div className="w-full h-screen relative bg-[#111827]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
      <div className="sticky top-0 z-10 bg-black/50">
        <Navbar />
      </div>
      <div className="absolute inset-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
