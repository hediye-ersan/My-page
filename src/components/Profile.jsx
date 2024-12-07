import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Profile = () => {

  const { currentLangContent } = useLanguage();
  const profileData = currentLangContent.profile;


  return (
    <section className="bg-[#F4F4F4] dark:bg-dark-bg1 dark:text-dark-text">
      <h2 className="text-4xl pt-20 ">{profileData.title}</h2>
      <div className='flex justify-center gap-16 px-32 flex-col sm:flex-row '>
      {/* Basic Information */}
      <div className="text-left p-[32px] mt-12 sm:mb-16 w-full sm:w-2/5 rounded-xl dark:bg-[#525252]">
        <h3 className="text-2xl text-[#EA2678] font-playfair">{profileData.basicInfo.title}</h3>
        <div className="mt-4 text-lg text-left">
          <p className="mb-4"><strong>Birthday:</strong> {profileData.basicInfo.birthday}</p>
          <p className="mb-4"><strong>City:</strong> {profileData.basicInfo.city}</p>
          <p className="mb-4"><strong>Education:</strong> {profileData.basicInfo.education}</p>
          <p className="mb-4"><strong>Preferred Role:</strong> {profileData.basicInfo.preferredRole}</p>
        </div>
      </div>

      {/* About Me */}
      <div className="text-left  p-[32px] sm:mt-12 mb-16 w-full sm:w-2/5">
        <h3 className="text-2xl font-playfair">{profileData.aboutMe.title}</h3>
        <div className="mt-4 space-y-2 text-lg">
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
