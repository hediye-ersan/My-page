import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';

const Skills = () => {

  const { currentLangContent } = useLanguage();
  const skillsData = currentLangContent.skills;
  return (
    <section className="pt-20 pb-24 dark:bg-dark-bg2 dark:text-dark-text">
      
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
            <p className="text-[#777777] dark:text-dark-text">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
