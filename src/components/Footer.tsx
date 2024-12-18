import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Medical Device Warning Banner */}
      <div className="bg-emerald-800 py-4 fixed bottom-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white font-semibold text-lg sm:text-xl lg:text-2xl">
            To jest wyrób medyczny. Używaj go zgodnie z instrukcją użytkowania lub etykietą.
          </p>
        </div>
      </div>

      <footer className="bg-emerald-800 text-white pt-16"> {/* Agregamos pt-16 para compensar el banner flotante */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-2">
              <img 
                src="/logofooter.png" 
                alt="As-Med Logo" 
                className="h-16 w-auto sm:h-20" // Aumento del tamaño para hacerlo más visible
              />
            </div>

            <div className="text-emerald-200">
              <h3 className="text-white font-semibold mb-2">Kontakt</h3>
              <p>ul. Czarnieckiego 32</p>
              <p>14-100 Ostróda</p>
              <p>Tel: 506 196113 / 512 664242</p>
              <p>Email: biuro@asmed-ostroda.pl</p>
            </div>

            <div className="text-emerald-200">
              <h3 className="text-white font-semibold mb-2">Godziny otwarcia</h3>
              <p>Poniedziałek: 10:00 - 17:00</p>
              <p>Wtorek - Piątek: 8:30 - 16:00</p>
              {/* Enlace al PDF */}
              <a 
                href="./Regulamin.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-300 hover:text-yellow-500 text-sm block mt-2"
              >
                Regulamin Wizyt w As MED
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-emerald-700">
            <div className="text-center text-white">
              © {new Date().getFullYear()} As-Med. Wszelkie prawa zastrzeżone. - Zrobione z <span style={{ color: '#ffffff' }}>❤️</span> <a href="https://www.jestemprogramista.pl" className="text-emerald-200 hover:text-yellow-500" target="_blank" rel="noopener noreferrer">Jestem Programista</a>
              <br />
              <span className="text-sm">
                Projekt strony internetowej:
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;