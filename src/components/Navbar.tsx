import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">TFT FASHION BD</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
            <a href="#" className="text-gray-700 hover:text-black">Shop</a>
            <a href="#" className="text-gray-700 hover:text-black">Collections</a>
            <a href="#" className="text-gray-700 hover:text-black">About</a>
            <a href="#" className="text-gray-700 hover:text-black">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Collections</a>
            <a href="#" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}