import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const { currentLangContent } = useLanguage();
  const projectsData = currentLangContent.projects;

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const fixedProjects = [projectsData.firstProject, projectsData.secondProject];

  return (
    <section className="py-20 px-6 sm:px-36 dark:bg-dark-bg2 dark:text-dark-text">
      <h2 className="text-3xl sm:text-4xl font-medium pb-12">{projectsData.title}</h2>

      {/* Flex container: ilk 2 proje + 3. proje slider */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
        {/* İlk iki proje */}
        {fixedProjects.map((project, index) => (
          <div
            key={index}
            className={`w-full sm:w-2/5 text-left p-6 sm:p-12 rounded-2xl ${index === 0 ? 'bg-[#DDEEFE] dark:bg-[#2D3235]' : 'bg-[#D9F6F1] dark:bg-[#495351]'
              }`}
          >
            <h3 className="text-2xl sm:text-[29px] font-bold font-playfair">{project.title}</h3>
            <p className="mt-2">{project.text}</p>

            <div className="flex gap-2 flex-wrap w-full py-6 justify-center sm:justify-start">
              {Object.values(project.skills).map((skill, i) => (
                <p
                  key={i}
                  className="font-playfair font-bold text-sm sm:text-base border p-2 px-4 sm:px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]"
                >
                  {skill}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-6 gap-2 sm:gap-0">
              <a href={project.viewGit.link} className="font-semibold text-lg sm:text-xl">{project.viewGit.text}</a>
              <a href={project.viewGit.buttonLink} className="font-semibold text-lg sm:text-xl">{project.viewGit.button}</a>
            </div>

            <div className="mt-10 sm:mt-12">
              <img src={project.image} alt={`Project ${index + 1}`} className="w-full max-w-full h-auto rounded-xl" />
            </div>
          </div>
        ))}

        {/* 3. proje slider */}
        <div className="w-full sm:w-2/5">
          <Slider {...sliderSettings}>
            <div className="w-full text-left p-6 sm:p-12 rounded-2xl bg-[#FFE7D9] dark:bg-[#4D3F35]">
              <h3 className="text-2xl sm:text-[29px] font-bold font-playfair">{projectsData.thirdProject.title}</h3>
              <p className="mt-2">{projectsData.thirdProject.text}</p>

              <div className="flex gap-2 flex-wrap w-full py-6 justify-center sm:justify-start">
                {Object.values(projectsData.thirdProject.skills).map((skill, i) => (
                  <p
                    key={i}
                    className="font-playfair font-bold text-sm sm:text-base border p-2 px-4 sm:px-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#525252]"
                  >
                    {skill}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-6 gap-2 sm:gap-0">
                <a href={projectsData.thirdProject.viewGit.link} className="font-semibold text-lg sm:text-xl">{projectsData.thirdProject.viewGit.text}</a>
                <a href={projectsData.thirdProject.viewGit.buttonLink} className="font-semibold text-lg sm:text-xl">{projectsData.thirdProject.viewGit.button}</a>
              </div>

              <div className="mt-10 sm:mt-12">
                <img src={projectsData.thirdProject.image} alt="Project 3" className="w-full max-w-full h-auto rounded-xl" />
              </div>
            </div>
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Projects;
