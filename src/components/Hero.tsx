import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/hands-gloves-near-womans-ear_259150-52800.jpg?w=740"
          alt="Profesjonalna diagnostyka słuchu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-900/75 to-emerald-900/90 backdrop-blur-sm"></div>
      </div>
      
      <Container className="relative py-32 sm:py-40">
        <div className="text-center">
          <div className="inline-block animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white mb-4">
              <span className="block font-light">Witamy w</span>
              <span className="block font-bold mt-2">As-Med</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-emerald-200 mt-2 font-light">
                Protetyka Słuchu
              </span>
            </h1>
            <p className="mt-8 max-w-lg mx-auto text-xl text-emerald-50 leading-relaxed font-light">
              Przywracamy radość słyszenia dzięki najnowocześniejszym rozwiązaniom protetycznym.
              <span className="block mt-2 font-medium">
                Zaufaj ekspertom z wieloletnim doświadczeniem.
              </span>
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button
              href="#kontakt"
              variant="primary"
              icon={Phone}
              className="w-full sm:w-auto"
            >
              Umów wizytę
            </Button>
            <Button
              href="#produkty"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              Zobacz ofertę
            </Button>
          </div>

         
        </div>
      </Container>
    </div>
  );
};

const InfoCard = ({ icon, text }) => (
  <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4">
    <span className="text-emerald-200">{icon}</span>
    <span className="font-medium">{text}</span>
  </div>
);

export default Hero;