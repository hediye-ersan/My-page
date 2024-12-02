import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import myData from '../data/myData';

const Projects = () => {
  const { language } = useLanguage();  
  const projectsData = myData[language].projects;
 
  
  return (
    <section className="m-24 ">
      <h2 className="text-4xl font-medium font-inter ">{projectsData.title}</h2>

      <div className='flex gap-8'>
        {/* First Project */}
        <div className="mt-12 w-2/4 text-left px-12 py-12 bg-[#DDEEFE] relative rounded-xl">
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.firstProject.title}</h3>
          <p className='text-base font-inter'>{projectsData.firstProject.text}</p>
          <div className="flex gap-2 flex-wrap w-3/4 py-2 ">
            {Object.values(projectsData.firstProject.skills).map((skill, index) => (
              <p key={index} className="font-playfair font-bold text-base border bg-[#FFFFFF] p-2 px-6 rounded-3xl">{skill}</p>
            ))}
          </div>
          <div className="flex justify-between pt-6">

            <p className='font-semibold font-inter text-xl'>{projectsData.firstProject.viewGit.text}</p>
            <button className='font-semibold font-inter text-xl'>{projectsData.firstProject.viewGit.button}</button>
          </div>
          <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-full'><img src={projectsData.firstProject.image} alt="Project 1" className='m-auto' /></div>

        </div>

        {/* Second Project */}
        <div className="mt-12 w-2/4 text-left px-12 py-12 bg-[#D9F6F1] relative rounded-xl">
          <h3 className="text-[29px] font-bold font-playfair">{projectsData.secondProject.title}</h3>
          <p>{projectsData.secondProject.text}</p>
          <div className="flex gap-2 flex-wrap w-3/4 py-2 ">
            {Object.values(projectsData.secondProject.skills).map((skill, index) => (
              <p key={index} className="font-playfair font-bold text-base border bg-[#FFFFFF] p-2 px-6 rounded-3xl">{skill}</p>
            ))}
          </div>
          <div className="flex justify-between pt-6">
            <p className='font-semibold font-inter text-xl'>{projectsData.secondProject.viewGit.text}</p>
            <button className='font-semibold font-inter text-xl'>{projectsData.secondProject.viewGit.button}</button>
          </div>
          <div>
            <img src={projectsData.secondProject.image} alt="Project 2" className='m-auto ' /></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
