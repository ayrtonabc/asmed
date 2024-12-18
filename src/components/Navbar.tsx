import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    ['O nas', '#o-nas'],
    ['Oferta', '#oferta'],
    ['Produkty', '#produkty'],
    ['Refundacja', '#refundacja'],
    ['Blog', '#blog'],
    ['Kontakt', '#kontakt']
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-emerald-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="./logo.png" alt="Logo As-Med" className="h-12" /> {/* Ajusta el tamaño de la imagen según sea necesario */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="relative font-medium text-gray-700 hover:text-emerald-600 py-2 transition-colors group"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
            <Button
              href="tel:506196113"
              variant="primary"
              icon={Phone}
              className="ml-4"
            >
              Umów wizytę
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden fixed inset-x-0 top-20 bg-white border-b border-emerald-100 shadow-lg
            transition-all duration-300 ease-in-out transform
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}
        >
          <div className="p-4 space-y-2">
            {menuItems.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            ))}
            <Button
              href="tel:506196113"
              variant="primary"
              icon={Phone}
              className="w-full mt-4"
            >
              Umów wizytę
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
