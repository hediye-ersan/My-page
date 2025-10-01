import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Certificates = () => {

  const { currentLangContent } = useLanguage();
  const certData = currentLangContent.certificates;
  const items = certData.items || [];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [activePage, setActivePage] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightbox.open) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox.open]);

  return (
    <section className="bg-[#F4F4F4] dark:bg-dark-bg1 dark:text-dark-text px-4 sm:px-0 py-16">
      <h2 className="text-3xl sm:text-4xl text-center font-playfair">{certData.title}</h2>

      {/* Mobile/Tablet: 1-per-view carousel */}
      <div className="lg:hidden mt-10 px-4 sm:px-10">
        {/* Dots */}
        <div className="flex justify-center mb-6 space-x-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMobile(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeMobile ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'}`}
            />
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeMobile * 100}%)` }}
          >
            {items.map((cert, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <article className="bg-white dark:bg-[#525252] rounded-xl p-4 sm:p-6 flex flex-col">
                  <div className="flex w-full items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-gray-700">
                    <img
                      src={cert.image}
                      alt={cert.description}
                      className="w-full h-auto object-contain cursor-zoom-in"
                      onClick={() => openLightbox(cert.image, cert.description)}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-base sm:text-lg">{cert.description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cert.date}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setActiveMobile(activeMobile > 0 ? activeMobile - 1 : items.length - 1)}
            className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveMobile(activeMobile < items.length - 1 ? activeMobile + 1 : 0)}
            className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop: carousel with 3 per page */}
      <div className="hidden lg:block mt-10 px-4 sm:px-32">
        {/* Dots */}
        <div className="flex justify-center mb-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activePage ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'}`}
            />
          ))}
        </div>

        {/* Carousel viewport */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const start = pageIdx * itemsPerPage;
              const slice = items.slice(start, start + itemsPerPage);
              return (
                <div key={pageIdx} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-8">
                    {slice.map((cert, idx) => (
                      <article key={`${pageIdx}-${idx}`} className="bg-white dark:bg-[#525252] rounded-xl p-6 flex flex-col">
                        <div className="flex w-full items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-gray-700">
                          <img
                            src={cert.image}
                            alt={cert.description}
                            className="w-full h-auto object-contain cursor-zoom-in"
                            onClick={() => openLightbox(cert.image, cert.description)}
                          />
                        </div>
                        <div className="mt-4">
                          <p className="text-lg">{cert.description}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cert.date}</p>
                        </div>
                      </article>
                    ))}
                    {slice.length < itemsPerPage && Array.from({ length: itemsPerPage - slice.length }).map((_, fillerIdx) => (
                      <div key={`filler-${pageIdx}-${fillerIdx}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows - vertically centered alongside the carousel */}
          <button
            onClick={() => setActivePage(activePage > 0 ? activePage - 1 : totalPages - 1)}
            className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 z-10"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActivePage(activePage < totalPages - 1 ? activePage + 1 : 0)}
            className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 z-10"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full p-2 shadow-lg"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg bg-white dark:bg-gray-800"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;


