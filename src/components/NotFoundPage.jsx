import React from 'react';
import Lottie from 'lottie-react';

// Hata animasyonu
import errorAnimationData from '../assets/lottie/Error 404.json';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen dark:bg-dark-bg1 dark:text-dark-text bg-gray-50 flex items-center justify-center px-4">
      {/* Lottie Animation */}
      <div className="w-96 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem]">
        <Lottie 
          animationData={errorAnimationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;

