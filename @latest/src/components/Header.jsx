import React from 'react';

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">React Academy</h1>
      <ul className="flex gap-4">
        <li>
          <a href="#hero" className="hover:underline">Home</a>
          </li>
        <li>
          <a href="#features" className="hover:underline">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
