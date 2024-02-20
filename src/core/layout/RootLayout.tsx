import { Outlet } from 'react-router-dom';
import { Navbar } from '../../apps/portfolio/presentation/components/navbar/navbar';

const RootLayout = () => {
  return (
    <div className="w-full h-screen relative bg-[#111827]" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
      <div className="sticky top-0 z-10 bg-[#080C13]">
        <Navbar />
      </div>
      <div className="absolute inset-0 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-transparent overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
