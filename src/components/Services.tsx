import React from 'react';
import { Stethoscope, Ear, Wrench, BatteryCharging } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-12 w-12 text-emerald-600" />,
      title: "Badania słuchu",
      description: "Przeprowadzamy bezpłatne badania słuchu dla dorosłych oraz dzieci od 7. roku życia. Nasze badania pomagają dokładnie określić poziom ubytku słuchu.",
      features: [
        "Audiometria tonalna",
        "Tympanometria",
        "Otoskopia",
        "Konsultacja specjalistyczna"
      ]
    },
    {
      icon: <Ear className="h-12 w-12 text-emerald-600" />,
      title: "Aparaty słuchowe",
      description: "Oferujemy szeroki wybór aparatów słuchowych renomowanych producentów, dostosowanych do stylu życia i potrzeb pacjenta.",
      features: [
        "Modele na baterie i akumulatory",
        "Możliwość testowania w domu",
        "Indywidualne dopasowanie",
        "Gwarancja satysfakcji"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-emerald-600" />,
      title: "Przeglądy techniczne",
      description: "Zapewniamy kompleksową konserwację i serwis techniczny aparatów słuchowych zakupionych w naszym gabinecie.",
      features: [
        "Regularne przeglądy",
        "Czyszczenie i konserwacja",
        "Wymiana części",
        "Optymalizacja ustawień"
      ]
    },
    {
      icon: <BatteryCharging className="h-12 w-12 text-emerald-600" />,
      title: "Akcesoria i opieka",
      description: "W naszej ofercie znajdują się baterie, środki pielęgnacyjne oraz akcesoria do aparatów słuchowych, a także bezpłatna pomoc techniczna.",
      features: [
        "Baterie i osuszacze elektroniczne",
        "Środki czyszczące",
        "Filtry i wkładki",
        "Wsparcie użytkownika"
      ]
    }
  ];

  return (
    <section id="oferta" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
            Nasze Usługi
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <svg className="h-4 w-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
