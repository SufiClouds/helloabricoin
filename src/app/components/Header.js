
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from '../components/Modal';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left - Logon Text */}
      <div className="text-xl font-bold mb-2 md:mb-0">
        Logon
      </div>

      {/* Center - Navigation Links */}
      <nav>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/sales">Sales</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Right - Buy Now Button */}
      {/* <div className="mt-2 md:mt-0">
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
          Buy Now
        </button>
      </div> */}
      <div className="flex justify-between items-center bg-stone-800 p-4">
      {/* Header Title */}
      {/* <h1 className="text-2xl text-white font-bold">Crypto Exchange</h1> */}

      {/* Buy Now Button */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleOpenModal}>
        Buy Now
      </button>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    </header>
  );
}

export default Header;
