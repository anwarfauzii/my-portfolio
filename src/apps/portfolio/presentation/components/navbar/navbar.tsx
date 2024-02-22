import { useState } from 'react';
import ContentNavbar from './content.navbar';

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="w-full px-4 lg:px-20 py-6 flex justify-between">
        <span className="text-2xl font-bold text-white">
          Anwar <span className="text-yellow-500">Fauzi</span>
        </span>
        <div className="lg:hidden">
          <div
            onClick={() => setOpenNav(!openNav)}
            className={`transition-all duration-1000 ${openNav ? 'rotate-180' : ''}`}
          >
            {openNav ? (
              <svg
                className="w-5 text-white transition-all duration-300"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
              </svg>
            ) : (
              <svg
                className="w-5 text-white transition-all duration-300"
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>
        </div>
        <div className="hidden lg:flex gap-x-4">
          <ContentNavbar />
        </div>
      </div>
      {openNav ? (
        <div className="grid grid-cols-2 lg:hidden px-4">
          <ContentNavbar />
        </div>
      ) : null}
    </>
  );
};
