import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';
import { useDarkMode } from '../contexts/DarkModeContext';

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();  
  const skillsData = myData[language].skills;
  return (
    <section className={`pt-20 pb-24  font-inter${isDarkMode ? 'text-[#F4F4F4] bg-[#484148]' : ''}`}>
      <h2 className=" text-5xl pb-12 ">{skillsData.title}</h2>
      
      <div className="flex flex-wrap gap-8 justify-center text-2xl text-center">
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
