import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Profile = () => {

  const { currentLangContent } = useLanguage();
  const profileData = currentLangContent.profile;


  return (
    <section className="bg-[#F4F4F4] dark:bg-dark-bg1 dark:text-dark-text px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl pt-16 font-bold sm:pt-20 text-center">{profileData.title}</h2>
  
      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 px-4 sm:px-32">
        {/* Basic Information */}
        <div className="text-left p-6 sm:p-[32px] mt-10 sm:mt-12 sm:mb-16 w-full sm:w-2/5 rounded-xl dark:bg-[#525252] bg-white">
          <h3 className="text-xl sm:text-2xl text-[#EA2678] font-playfair">{profileData.basicInfo.title}</h3>
          <div className="mt-4 text-base sm:text-lg">
            <p className="mb-4"><strong>Birthday:</strong> {profileData.basicInfo.birthday}</p>
            <p className="mb-4"><strong>City:</strong> {profileData.basicInfo.city}</p>
            <p className="mb-4"><strong>Education:</strong> {profileData.basicInfo.education}</p>
            <p className="mb-4"><strong>Preferred Role:</strong> {profileData.basicInfo.preferredRole}</p>
          </div>
        </div>
  
        {/* About Me */}
        <div className="text-left p-6 sm:p-[32px] mb-16 sm:mt-12 w-full sm:w-2/5 bg-white dark:bg-transparent">
          <h3 className="text-xl sm:text-2xl font-playfair">{profileData.aboutMe.title}</h3>
          <div className="mt-4 space-y-2 text-base sm:text-lg">
            {profileData.aboutMe.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Profile;
