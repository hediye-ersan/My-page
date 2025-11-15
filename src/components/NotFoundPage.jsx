import React from 'react';
import Lottie from 'lottie-react';

// Hata animasyonu
import errorAnimationData from '../assets/lottie/Error 404.json';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen dark:bg-dark-bg1 dark:text-dark-text bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Lottie Animation */}
      <div className="w-96 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem]" aria-hidden="true">
        <Lottie 
          animationData={errorAnimationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-pink text-white rounded-lg hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 transition-colors"
          aria-label="Go back to homepage"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;

