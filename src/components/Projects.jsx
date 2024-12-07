import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';
import { useDarkMode } from '../contexts/DarkModeContext';

const Projects = () => {
  const { isDarkMode } = useDarkMode();
  const { currentLangContent } = useLanguage();
  const projectsData = currentLangContent.projects;


  return (
    <section className={`py-20 px-36  ${isDarkMode ? 'bg-[#484148] text-white' : ''}`}>
      <h2 className="text-4xl font-medium font-inter pb-12">{projectsData.title}</h2>

      <div className="flex gap-16 flex-col sm:flex-row ">
        {/* First Project */}
        <div className={`sm:w-2/4 w-full text-left p-12  rounded-2xl  relative ${isDarkMode ? 'bg-[#2D3235]' : 'bg-[#DDEEFE]'}`}>
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.firstProject.title}</h3>
          <p className='text-base font-inter'>{projectsData.firstProject.text}</p>
          <div className="flex gap-2 flex-wrap sm:w-3/4 py-2 justify-center sm:justify-start w-full">
            {Object.values(projectsData.firstProject.skills).map((skill, index) => (
              <p key={index} className={`font-playfair font-bold text-base border  p-2 px-6 rounded-3xl ${isDarkMode ? 'bg-[#525252]' : 'bg-[#FFFFFF]'}`}>{skill}</p>
            ))}
          </div>
          <div className="flex justify-between pt-6">

            <p className='font-semibold font-inter text-xl'>{projectsData.firstProject.viewGit.text}</p>
            <button className='font-semibold font-inter text-xl'>{projectsData.firstProject.viewGit.button}</button>
          </div>
          <div className='flex mt-24'>
          <img src={projectsData.firstProject.image} alt="Project 1"  />
          </div>
          
        </div>

        {/* Second Project */}
        <div className={` text-left px-12 sm:w-2/4 w-full rounded-2xl py-12 relative ${isDarkMode ? 'bg-[#495351]' : 'bg-[#D9F6F1]'}`}>
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.secondProject.title}</h3>
          <p>{projectsData.secondProject.text}</p>
          <div className="flex gap-2 flex-wrap sm:w-3/4 py-2 justify-center sm:justify-start w-full ">
            {Object.values(projectsData.secondProject.skills).map((skill, index) => (
              <p key={index} className={`font-playfair font-bold text-base border p-2 px-6 rounded-3xl ${isDarkMode ? 'bg-[#525252]' : 'bg-[#FFFFFF]'}`}>{skill}</p>
            ))}
          </div>
          <div className="flex justify-between pt-6 ">
            <p className='font-semibold font-inter text-xl'>{projectsData.secondProject.viewGit.text}</p>
            <button className='font-semibold font-inter text-xl'>{projectsData.secondProject.viewGit.button}</button>
          </div>
          <div className='flex mt-12 w-full'>
            <img src={projectsData.secondProject.image} alt="Project 2"  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
