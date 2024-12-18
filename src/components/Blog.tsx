import React, { useState } from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Czy wiesz, że...?",
      date: "2024-12-11",
      image: "/blog1.jpeg",
      excerpt: "Oto kilka zaskakujących faktów na temat naszego słuchu.",
      content: "Nasz słuch jest niezwykle wrażliwy, potrafi wychwycić dźwięki o częstotliwości od 20 Hz do 20 000 Hz! Nasze uszy są również w stanie dostosować się do zmieniających się warunków otoczenia, co pozwala nam skutecznie komunikować się w hałasie. Ciekawe jest również to, że nasz słuch potrafi rozróżniać dźwięki w odległości nawet do 100 metrów, co pozwala nam zorientować się, skąd dochodzi dźwięk w naszym otoczeniu. Co więcej, nasze uszy są w stanie wychwycić najdrobniejsze zmiany w dźwiękach, które mogą sugerować niebezpieczeństwo, jak na przykład zbliżający się pojazd lub drgania powietrza spowodowane głośnym dźwiękiem.",
      category: "Ciekawostki"
    },
    {
      title: "Jak nasze uszy reagują na muzykę?",
      date: "2024-12-10",
      image: "/blog2.jpeg",
      excerpt: "Muzyka ma potężny wpływ na naszą percepcję dźwięków.",
      content: "Badania pokazują, że słuchanie muzyki może zmieniać sposób, w jaki postrzegamy inne dźwięki. Na przykład, rytmiczne dźwięki mogą poprawić naszą zdolność do rozumienia mowy w hałasie. Co więcej, nasz mózg reaguje na muzykę w sposób, który może poprawić naszą koncentrację i samopoczucie. Melodie o szybkim tempie mogą zwiększyć naszą energię, a wolniejsze utwory pomogą nam się zrelaksować. Warto również dodać, że słuchanie muzyki może wpływać na nasze emocje i pomagać w radzeniu sobie ze stresem, ponieważ obniża poziom kortyzolu, hormonu stresu.",
      category: "Fakty"
    },
    {
      title: "Dźwięki, które słyszymy przez całe życie",
      date: "2024-12-09",
      image: "/blog3.jpeg",
      excerpt: "Nasz słuch nigdy nie odpoczywa, nawet podczas snu!",
      content: "Choć w czasie snu nasze ciało odpoczywa, nasz mózg nadal przetwarza dźwięki. Oznacza to, że nasze uszy nie przestają działać, nawet gdy śpimy! Zjawisko to nazywane jest **przebudzeniem dźwiękowym** i polega na tym, że nasz mózg jest w stanie reagować na dźwięki, które uznaje za ważne lub niebezpieczne. Na przykład, jeżeli w nocy usłyszysz płacz dziecka lub alarm, twój mózg może cię obudzić, mimo że jesteś głęboko śpiący. To pokazuje, jak nasz układ słuchowy jest zaprojektowany, by dbać o nasze bezpieczeństwo, nawet podczas snu. Inny interesujący fakt to to, że w ciągu życia człowiek jest narażony na różnorodne dźwięki, które wpływają na nasze zdrowie, w tym na naszą zdolność słyszenia.",
      category: "Ciekawostki"
    }
  ];

  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="mt-2 text-xl font-serif font-bold text-gray-900">
                  {post.title}
                </h3>
                <div className={`mt-3 text-gray-600 transition-all duration-300 ${
                  expandedPost === index ? 'h-auto' : 'h-20 overflow-hidden'
                }`}>
                  <p>{expandedPost === index ? post.content : post.excerpt}</p>
                </div>
                <button
                  onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                  className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  {expandedPost === index ? 'Zwiń' : 'Czytaj więcej'}
                  <svg className={`ml-2 h-4 w-4 transform transition-transform ${
                    expandedPost === index ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

