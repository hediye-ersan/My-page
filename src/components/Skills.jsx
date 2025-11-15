import React from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../contexts/LanguageContext';
import DarkModeToggle from './DarkModeToggle';
import trophyAnimationData from '../assets/lottie/Trophy.json';

const Skills = () => {

  const { currentLangContent } = useLanguage();
  const skillsData = currentLangContent.skills;
  return (
    <section className="pb-24 dark:bg-dark-bg2 dark:text-dark-text" aria-labelledby="skills-heading">
      
      <div className="flex items-center justify-center gap-4 pb-12">
        <h2 id="skills-heading" className="text-5xl font-bold">{skillsData.title}</h2>
        <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0" aria-hidden="true">
          <Lottie 
            animationData={trophyAnimationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap gap-8 sm:justify-center text-2xl text-center grid grid-cols-2 md:grid-cols-3" role="list"> 
        
        {/*map uygulandı*/}
        {skillsData.skill.map((skill, index) => (
          <div key={index} className="text-center" role="listitem">
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="mx-auto"
              loading="lazy"
              width="64"
              height="64"
            />
            <p className="text-[#777777] dark:text-dark-text">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
