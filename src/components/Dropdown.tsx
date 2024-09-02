import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const dropdownRef = useClickOutside(closeDropdown);

  
  return (
    <div className="relative inline-block text-left z-50"ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full h-14 shadow-md px-4 py-5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Options
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
      
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
function handleClickOutside(this: Document, ev: MouseEvent) {
  throw new Error('Function not implemented.');
}

