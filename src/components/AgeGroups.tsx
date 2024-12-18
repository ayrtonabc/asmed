import React from 'react';

const AgeGroups = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Rozwiązania dla każdego wieku
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AgeGroupCard
            image="/product/niños.jpeg"
            title="Dla Dzieci"
            description="Wygodne i kolorowe aparaty słuchowe, zaprojektowane z myślą o aktywnych dzieciach."
            features={[
              "Modele wodoodporne",
              "Radosne kolory",
              "Rodzicielska kontrola",
              "Monitoring aktywności"
            ]}
          />
          
          <AgeGroupCard
            image="/product/bicros.jpg"
            title="Dla Dorosłych"
            description="Nowoczesne i dyskretne aparaty, które wspierają aktywność zawodową i codzienne życie."
            features={[
              "Bluetooth",
              "Redukcja hałasu",
              "Automatyczne dostosowanie",
              "Długotrwała bateria"
            ]}
          />
          
          <AgeGroupCard
            image="/product/adul.png"
            title="Dla Seniorów"
            description="Łatwe w obsłudze aparaty, które zwiększają komfort słuchu i zapewniają bezpieczeństwo."
            features={[
              "Duże przyciski",
              "Automatyczna regulacja",
              "Głośny dzwonek",
              "Prosta konserwacja"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const AgeGroupCard = ({ image, title, description, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AgeGroups;
