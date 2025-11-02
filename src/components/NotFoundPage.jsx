import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

// Son eklenen Lottie animasyonu
import errorAnimationData from '../assets/lottie/Indicius Sticker HelloWorld.json';

const NotFoundPage = () => {
  const { currentLangContent, language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen dark:bg-dark-bg1 dark:text-dark-text bg-gray-50 flex items-center justify-center px-4">
      {/* Header Controls */}
      <div className='absolute top-4 right-4 flex gap-4'>
        <DarkModeToggle />
        <button
          className="bg-transparent"
          onClick={toggleLanguage}
        >
          {language === 'en' ? (
            <>
              <span className="text-pink text-bold">TÜRKÇE</span>'YE GEÇ
            </>
          ) : (
            <>
              SWITCH TO <span className="text-pink">ENGLISH</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Lottie Animation */}
        <div className="w-80 sm:w-96 md:w-[32rem] mx-auto mb-8">
          <Lottie 
            animationData={errorAnimationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl sm:text-7xl font-bold text-pink mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {language === 'en' 
              ? "Oops! The page you're looking for doesn't exist." 
              : "Hata! Aradığınız sayfa mevcut değil."}
          </p>

          {/* Back to Home Button */}
          <Link to="/">
            <motion.button
              className="px-8 py-4 bg-pink text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'Go Back Home' : 'Ana Sayfaya Dön'}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

