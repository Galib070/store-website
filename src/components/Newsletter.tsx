import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">Stay updated with our latest collections and exclusive offers</p>
        
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}