import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';

// Mevcut Lottie animasyonlarından birini kullanalım
import welcomeAnimationData from '../assets/lottie/Creative 3D Visual Animation - Website Development.json';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const { currentLangContent } = useLanguage();
  const bioData = currentLangContent?.bio;

  useEffect(() => {
    // Her sayfa yenilendiğinde animasyonu göster
    setShowWelcome(true);
    
    // Animasyonun otomatik olarak kapanma süresi
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      
      // Kapanma animasyonundan sonra kaldır
      setTimeout(() => {
        setShowWelcome(false);
      }, 500); // fade-out süresi
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Early return if no bio data
  if (!bioData) return null;

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Blur background overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ filter: 'blur(0px)', opacity: 0 }}
            animate={{ filter: 'blur(8px)', opacity: 1 }}
            exit={{ filter: 'blur(0px)', opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Content container */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center px-4"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ 
              scale: animationComplete ? 0.95 : 1, 
              opacity: animationComplete ? 0 : 1,
              y: animationComplete ? -15 : 0
            }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              duration: animationComplete ? 0.3 : 0.5,
              ease: "easeInOut"
            }}
          >
            {/* Lottie Animation */}
            <div className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] mb-4">
              <Lottie 
                animationData={welcomeAnimationData}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Welcome Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {bioData.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 px-4 max-w-md drop-shadow-md">
                Portfolio'ma Hoş Geldiniz
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;

