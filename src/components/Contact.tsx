import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';

const Contact = () => {
  return (
    <section id="kontakt" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Kontakt" 
          subtitle="Jesteśmy tu, aby pomóc. Skontaktuj się z nami w sposób, który najbardziej Ci odpowiada."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primera columna con información de contacto */}
          <div className="space-y-6">
            <Card className="relative h-[400px] p-8 border border-emerald-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">As-Med</h3>
                  <p className="text-emerald-600">Protetika Sluchu</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="h-5 w-5" />} 
                  title="Adres"
                  text="ul. Czarnieckiego 32, 14-100 Ostróda" 
                />
                <ContactItem 
                  icon={<Phone className="h-5 w-5" />} 
                  title="Telefon"
                  text="506 196113 / 512 664242" 
                />
                <ContactItem 
                  icon={<Mail className="h-5 w-5" />} 
                  title="E-mail"
                  text="biuro@asmed-ostroda.pl" 
                />
              </div>
            </Card>
          </div>

          {/* Segunda columna con la imagen */}
          <div className="space-y-6">
            <Card className="relative h-[400px] overflow-hidden">
              <img
                src="./product/local.png"
                alt="As-Med Gabinet"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Mapa ocupando todo el ancho */}
        <div className="mt-8">
          <Card className="h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.4156407818386!2d19.966256899999998!3d53.6930395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d65edb46e4857%3A0x57a7384e66fb2830!2sAS-MED%20Mariusz%20Liebert!5e0!3m2!1ses!2spl!4v1733956318567!5m2!1ses!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-3">
    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">{icon}</div>
    <div>
      <h4 className="font-serif font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

export default Contact;
