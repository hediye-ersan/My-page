import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';
import { useDarkMode } from '../contexts/DarkModeContext';

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const { currentLangContent } = useLanguage();
  const skillsData = currentLangContent.skills;
  return (
    <section className={`pt-20 pb-24  font-inter ${isDarkMode ? 'text-[#F4F4F4] bg-[#484148]' : ''}`}>
      
      <h2 className=" text-5xl pb-12 ">{skillsData.title}</h2>
      <div className="sm:flex sm:flex-wrap gap-8 sm:justify-center text-2xl text-center grid grid-cols-2 md:grid-cols-3"> 
        
        {/*map uygulandı*/}
        {skillsData.skill.map((skill, index) => (
          <div key={index} className="text-center ">
            <img
              src={skill.image}
              alt={skill.name}
              className="mx-auto"
            />
            <p className={`text-[#777777] ${isDarkMode ? 'text-[#D9D9D9]' : '' }`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
