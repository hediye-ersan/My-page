import React from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';
import webDevAnimationData from '../assets/lottie/Web Development.json';


const Profile = () => {

  const { currentLangContent } = useLanguage();
  const profileData = currentLangContent.profile;


  return (
    <section className="bg-[#F4F4F4] dark:bg-dark-bg1 dark:text-dark-text px-4 sm:px-0" aria-labelledby="profile-heading">
      <h2 id="profile-heading" className="text-3xl sm:text-4xl pt-16 font-bold sm:pt-20 text-center">{profileData.title}</h2>
  
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 px-4 sm:px-32">
        {/* Basic Information */}
        <article className="text-left p-6 sm:p-[32px] mt-10 sm:mt-12 sm:mb-16 w-full sm:w-2/5 rounded-xl dark:bg-[#525252] bg-white">
          <h3 className="text-xl sm:text-2xl text-[#EA2678] font-playfair">{profileData.basicInfo.title}</h3>
          <dl className="mt-4 text-base sm:text-lg">
            <div className="mb-4">
              <dt className="font-semibold inline">Birthday: </dt>
              <dd className="inline">{profileData.basicInfo.birthday}</dd>
            </div>
            <div className="mb-4">
              <dt className="font-semibold inline">City: </dt>
              <dd className="inline">{profileData.basicInfo.city}</dd>
            </div>
            <div className="mb-4">
              <dt className="font-semibold inline">Education: </dt>
              <dd className="inline">{profileData.basicInfo.education}</dd>
            </div>
            <div className="mb-4">
              <dt className="font-semibold inline">Preferred Role: </dt>
              <dd className="inline">{profileData.basicInfo.preferredRole}</dd>
            </div>
          </dl>
        </article>
  
        {/* About Me */}
        <article className="text-left p-6 sm:p-[32px] mb-16 sm:mt-12 w-full sm:w-2/5 bg-white rounded-xl dark:bg-transparent">
          <h3 className="text-xl sm:text-2xl font-playfair">{profileData.aboutMe.title}</h3>
          <div className="mt-4 space-y-2 text-base sm:text-lg">
            {profileData.aboutMe.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>

      {/* Web Development Lottie Animation */}
      <div className="flex justify-center items-center pb-2 px-4" aria-hidden="true">
        <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl">
          <Lottie 
            animationData={webDevAnimationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: 'auto', maxHeight: '450px' }}
          />
        </div>
      </div>
    </section>
  );
  
};

export default Profile;
