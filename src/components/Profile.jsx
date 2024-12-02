import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';

const Profile = () => {
  const { language } = useLanguage();  
  const profileData = myData[language].profile;


  return (
    <section className="bg-[#F4F4F4] font-inter">
      <h2 className="text-4xl pt-16 ">{profileData.title}</h2>
      <div className='flex justify-center'>
      {/* Basic Information */}
      <div className=" font-inter text-left bg-[#FFFFFF] p-[32px] mt-12 mb-16 w-2/5 rounded-xl">
        <h3 className="text-2xl text-[#EA2678] font-playfair">{profileData.basicInfo.title}</h3>
        <div className="mt-4 text-lg text-left">
          <p className="mb-4"><strong>Birthday:</strong> {profileData.basicInfo.birthday}</p>
          <p className="mb-4"><strong>City:</strong> {profileData.basicInfo.city}</p>
          <p className="mb-4"><strong>Education:</strong> {profileData.basicInfo.education}</p>
          <p className="mb-4"><strong>Preferred Role:</strong> {profileData.basicInfo.preferredRole}</p>
        </div>
      </div>

      {/* About Me */}
      <div className="font-inter text-left  p-[32px] mt-12 mb-16 ml-6 w-2/5">
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
