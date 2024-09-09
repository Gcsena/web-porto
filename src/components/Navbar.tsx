"use client";

import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
  className: string; // Additional class for hover color
};

const navigation: NavigationItem[] = [
  { name: 'Home', href: 'home', current: true, className: 'NavbarItem--home' },
  { name: 'About Me', href: 'about', current: false, className: 'NavbarItem--about' },
  { name: 'Projects', href: '#', current: false, className: 'NavbarItem--projects' },
  { name: 'Calendar', href: '#', current: false, className: 'NavbarItem--calendar' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => {
        setIsHidden(false);
      }, 3000);

      setScrollTimeout(timeout);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar bg-gray-800 ${isHidden ? 'hidden-navbar' : 'visible-navbar'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
              ) : (
                <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Centered Logo and Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'NavbarItem',
                      item.className // Adding the specific hover color class
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Logo on the right for larger screens */}
          <div className="absolute right-0 flex items-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
