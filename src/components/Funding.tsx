import React from 'react';
import { Wallet, Users, Clock, Shield } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import Badge from './ui/Badge';

const Funding = () => {
  return (
    <section id="refundacja" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Refundacja" 
          subtitle="Dowiedz się o możliwościach dofinansowania aparatów słuchowych"
        />

        {/* NFZ Logo and Info */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/nfz-logo.png" 
            alt="Logo NFZ" 
            className="h-24 mb-6"
          />
          <Card className="max-w-3xl p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <p className="text-gray-700 leading-relaxed">
              Każdej ubezpieczonej osobie z niedosłuchem (średnia niedosłuchu &gt;40dB, u dzieci &gt;30dB) 
              przynależne jest dofinansowanie z NFZ oraz w zależności, czy pacjent posiada stopień 
              niepełnosprawności, może ubiegać się również o dofinansowanie z MOPR-u bądź z PCPR-u.
            </p>
          </Card>
        </div>

        {/* Main Funding Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FundingCard
            icon={<Users />}
            title="Dorośli"
            subtitle="powyżej 26 lat"
            amount="2.100 PLN"
            period="5 lat"
            details={[
              "1.050 zł na każde ucho",
              "50 zł na każdą wkładkę uszną",
              "Łącznie 2.100 zł na dwa aparaty"
            ]}
          />
          <FundingCard
            icon={<Shield />}
            title="Dzieci i młodzież"
            subtitle="do 26 lat"
            amount="6.000 PLN"
            period="3 lata"
            details={[
              "3.000 zł na każde ucho",
              "60 zł na każdą wkładkę uszną",
              "Możliwość częstszej wymiany wkładek"
            ]}
            highlighted
          />
          <FundingCard
            icon={<Wallet />}
            title="Inwalidzi wojenni"
            subtitle="i osoby represjonowane"
            amount="3.000 PLN"
            period="5 lat"
            details={[
              "1.500 zł na każde ucho",
              "50 zł na każdą wkładkę uszną",
              "Łącznie 3.000 zł na dwa aparaty"
            ]}
          />
        </div>

        {/* Process Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            Uproszczona procedura od 2020 roku
          </h3>
          <div className="space-y-6">
            <TimelineItem
              step="1"
              title="Złożenie wniosku"
              description="Wnioski można składać elektronicznie, bez konieczności wizyty w urzędzie"
            />
            <TimelineItem
              step="2"
              title="Wizyta u lekarza"
              description="Potwierdzenie zlecenia podczas wizyty u specjalisty"
            />
            <TimelineItem
              step="3"
              title="Realizacja"
              description="Bezpośredni zakup aparatu bez wizyty w NFZ"
            />
          </div>
        </div>

        {/* Additional Funding Sources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border border-emerald-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-gray-900">MOPR</h4>
                <p className="text-emerald-600">Miejski Ośrodek Pomocy Rodzinie</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Możliwość uzyskania dodatkowego dofinansowania po otrzymaniu wsparcia z NFZ.
              Wysokość dofinansowania zależy od stopnia niepełnosprawności i miejsca zamieszkania.
            </p>
          </Card>

          <Card className="p-8 border border-emerald-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-gray-900">PCPR</h4>
                <p className="text-emerald-600">Powiatowe Centrum Pomocy Rodzinie</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Dodatkowe wsparcie dostępne dla osób z orzeczeniem o niepełnosprawności.
              Wymagane wcześniejsze uzyskanie dofinansowania z NFZ.
            </p>
          </Card>
        </div>

        {/* Help Message */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-emerald-50 border border-emerald-100">
            <p className="text-lg text-emerald-800 font-medium">
              Nasz zespół pomoże Państwu przy całej procedurze oraz odpowiednio pokieruje,
              gdzie można uzyskać dodatkową pomoc.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

const FundingCard = ({ icon, title, subtitle, amount, period, details, highlighted = false }) => (
  <Card 
    className={`
      p-6 transform transition-all duration-300 hover:-translate-y-1
      ${highlighted ? 'border-2 border-emerald-500 shadow-emerald-100' : 'border border-emerald-100'}
    `}
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className={`p-3 rounded-lg ${highlighted ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-gray-900">{title}</h3>
        <p className="text-emerald-600">{subtitle}</p>
      </div>
    </div>

    <div className="flex justify-between items-baseline mb-6">
      <span className="text-3xl font-bold text-emerald-600">{amount}</span>
      <Badge variant="primary">na {period}</Badge>
    </div>

    <ul className="space-y-3">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-600">{detail}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const TimelineItem = ({ step, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
      {step}
    </div>
    <div>
      <h4 className="text-lg font-serif font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Funding;