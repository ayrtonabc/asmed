import React from 'react';

const AboutUs = () => {
  return (
    <section id="o-nas" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            O nas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="./product/banner.png"
              alt="Zespół medyczny As-Med"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                Profesjonalna Opieka
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
              Firma AS-MED oferuje szeroką gamę aparatów słuchowych od renomowanych producentów. Dopasowujemy urządzenia indywidualnie do stylu życia, wieku oraz potrzeb pacjenta. Posiadamy aparaty na baterie oraz akumulatory, a przed zakupem oferujemy możliwość ich przetestowania w warunkach domowych.

Oferujemy również kompleksową obsługę po zakupie, w tym pomoc techniczną, baterie, środki pielęgnacyjne, osuszacze i akcesoria do aparatów słuchowych.
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;