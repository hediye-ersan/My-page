import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Projects = () => {

  const { currentLangContent } = useLanguage();
  const projectsData = currentLangContent.projects;


  return (
    <section className="py-20 px-36 dark:bg-dark-bg2 dark:text-dark-text">
      <h2 className="text-4xl font-medium pb-12 ">{projectsData.title}</h2>

      <div className="flex gap-16 flex-col sm:flex-row ">
        {/* First Project */}
        <div className="sm:w-2/4 w-full text-left p-12  rounded-2xl  relative bg-[#DDEEFE] dark:bg-[#2D3235]">
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.firstProject.title}</h3>
          <p className='text-base'>{projectsData.firstProject.text}</p>
          <div className="flex gap-2 flex-wrap sm:w-3/4 py-6 justify-center sm:justify-start w-full">
            {Object.values(projectsData.firstProject.skills).map((skill, index) => (
              <p key={index} className="font-playfair font-bold text-base border  p-2 px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]">{skill}</p>
            ))}
          </div>
          <div className="flex justify-between pt-6">

            <p className='font-semibold text-xl'>{projectsData.firstProject.viewGit.text}</p>
            <button className='font-semibold text-xl'>{projectsData.firstProject.viewGit.button}</button>
          </div>
          <div className='flex mt-24'>
          <img src={projectsData.firstProject.image} alt="Project 1"  />
          </div>
          
        </div>

        {/* Second Project */}
        <div className="text-left px-12 sm:w-2/4 w-full rounded-2xl py-12 relative bg-[#D9F6F1] dark:bg-[#495351]">
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.secondProject.title}</h3>
          <p>{projectsData.secondProject.text}</p>
          <div className="flex gap-2 flex-wrap sm:w-3/4 py-6 justify-center sm:justify-start w-full ">
            {Object.values(projectsData.secondProject.skills).map((skill, index) => (
              <p key={index} className='font-playfair font-bold text-base border p-2 px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]'>{skill}</p>
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
