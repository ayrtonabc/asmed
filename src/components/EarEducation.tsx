import React from 'react';

const EarEducation = () => {
  return (
    <section id="porady" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Zrozum Swój Słuch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/vintage-style-anatomy-drawing_23-2151782966.jpg?t=st=1734522843~exp=1734526443~hmac=e4f9f4735cfcc8ae4064408432b976b28bc91f5f7874eea679509a42798f00bd&w=740"
              alt="Anatomia ucha"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-xl"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-3">Anatomia ucha</h3>
              <p className="text-gray-700">
                Ucho składa się z trzech głównych części: ucha zewnętrznego, środkowego i wewnętrznego.
                Każda z nich pełni kluczową rolę w procesie słyszenia.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-3">Jak słyszymy?</h3>
              <p className="text-gray-700">
                Proces słyszenia rozpoczyna się, gdy fale dźwiękowe docierają do ucha zewnętrznego.
                Następnie przechodzą przez przewód słuchowy do błony bębenkowej, która przekazuje
                drgania do ucha środkowego.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-3">Najczęstsze problemy ze słuchem</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Niedosłuch przewodzeniowy
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Niedosłuch odbiorczy
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Szumy uszne (tinnitus)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarEducation;