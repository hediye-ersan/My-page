import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const Projects = () => {

  const { currentLangContent } = useLanguage();
  const projectsData = currentLangContent.projects;


  return (
    <section className="py-20 px-6 sm:px-36 dark:bg-dark-bg2 dark:text-dark-text">
      <h2 className="text-3xl sm:text-4xl font-medium pb-12">{projectsData.title}</h2>
  
      <div className="flex gap-10 sm:gap-16 flex-col sm:flex-row">
        {/* First Project */}
        <div className="w-full sm:w-2/4 text-left p-6 sm:p-12 rounded-2xl bg-[#DDEEFE] dark:bg-[#2D3235]">
          <h3 className="text-2xl sm:text-[29px] font-bold font-playfair">{projectsData.firstProject.title}</h3>
          <p className="text-base mt-2">{projectsData.firstProject.text}</p>
  
          <div className="flex gap-2 flex-wrap w-full py-6 justify-center sm:justify-start">
            {Object.values(projectsData.firstProject.skills).map((skill, index) => (
              <p key={index} className="font-playfair font-bold text-sm sm:text-base border p-2 px-4 sm:px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]">
                {skill}
              </p>
            ))}
          </div>
  
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-6 gap-2 sm:gap-0">
            <a href='https://github.com/hediye-ersan/My-Pizza-Page' className="font-semibold text-lg sm:text-xl">{projectsData.firstProject.viewGit.text}</a>
            <a href='https://pizza-sayfam.vercel.app/' className="font-semibold text-lg sm:text-xl">{projectsData.firstProject.viewGit.button}</a>
          </div>
  
          <div className="mt-10 sm:mt-24">
            <img src={projectsData.firstProject.image} alt="Project 1" className="w-full max-w-full h-auto rounded-xl" />
          </div>
        </div>
  
        {/* Second Project */}
        <div className="w-full sm:w-2/4 text-left p-6 sm:px-12 sm:py-12 rounded-2xl bg-[#D9F6F1] dark:bg-[#495351]">
          <h3 className="text-2xl sm:text-[29px] font-bold font-playfair">{projectsData.secondProject.title}</h3>
          <p className="mt-2">{projectsData.secondProject.text}</p>
  
          <div className="flex gap-2 flex-wrap w-full py-6 justify-center sm:justify-start">
            {Object.values(projectsData.secondProject.skills).map((skill, index) => (
              <p key={index} className="font-playfair font-bold text-sm sm:text-base border p-2 px-4 sm:px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]">
                {skill}
              </p>
            ))}
          </div>
  
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-6 gap-2 sm:gap-0">
            <a href='https://github.com/hediye-ersan/Trend-Kod' className="font-semibold text-lg sm:text-xl">{projectsData.secondProject.viewGit.text}</a>
            <a href='https://trend-kod.vercel.app/' className="font-semibold text-lg sm:text-xl">{projectsData.secondProject.viewGit.button}</a>
          </div>
  
          <div className="mt-10 sm:mt-12">
            <img src={projectsData.secondProject.image} alt="Project 2" className="w-full max-w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Projects;
