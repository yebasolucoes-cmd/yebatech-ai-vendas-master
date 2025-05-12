
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-poppins font-bold text-xl md:text-2xl text-gradient">YEBATECH</h1>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-yebatech-darkText hover:text-yebatech-blue transition-colors">
            Home
          </Link>
          <Link 
            to="/checkout" 
            className="bg-yebatech-green hover:bg-yebatech-green/90 text-white py-2 px-6 rounded-full font-medium transition-all"
          >
            Inscrever-se
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
