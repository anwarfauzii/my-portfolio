import { Link } from 'react-router-dom';

export const Home = () => {
  const clickResume = () => {
    window.open(
      'https://drive.google.com/file/d/1qiKOQSX977gou4BKhDavSBxRnWM8xx9E/view?usp=sharing',
      '_blank'
    );
  };
  const clickTouch = () => {
    window.location.href = 'mailto:anwarfauzi2608@gmail.com';
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-44">
      <div className="w-1/2 pl-32">
        <span className="text-yellow-500 text-2xl font-semibold">Hello, Welcome</span>

        <div className="text-3xl font-bold mb-2 pt-4">
          <span className="text-white">I'm&nbsp;</span>
          <Link
            to={'/about'}
            className="text-gray-100 underline hover:text-white hover:font-extrabold"
          >
            Anwar Fauzi
          </Link>{' '}
          👋
        </div>
        <p className="text-black mb-6 pt-2">
          <span className="font-bold text-lg text-gray-200">Front-End Developer</span> <br />
          <span className="font-light text-base text-gray-400">Based in Jakarta, Indonesia. </span>
        </p>
        <div className="flex gap-x-6">
          <div
            className="inline-block justify-center items-center bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-2 rounded-lg border-2 border-white shadow-xl cursor-pointer hover:shadow-gray-700/35 hover:scale-105 transition-all"
            onClick={clickResume}
          >
            <span className="text-xl font-bold text-white">Resume</span>
          </div>
          <div
            className="inline-block justify-center items-center bg-black/70 px-6 py-2 rounded-lg border-2 border-white shadow-xl cursor-pointer hover:shadow-gray-700/35 hover:scale-105 transition-all"
            onClick={clickTouch}
          >
            <span className="text-xl font-bold text-white">Get in touch</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src="images/avatar.png" className="w-4/6" alt="avatarImage" />
      </div>
    </div>
  );
};
