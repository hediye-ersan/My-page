import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { currentLangContent } = useLanguage();
  const projectsData = currentLangContent.projects;
  const [activeProject, setActiveProject] = useState(0);

  // Tüm projeleri bir array'e çevir
  const allProjects = [
    projectsData.firstProject,
    projectsData.secondProject,
    projectsData.thirdProject
  ];

  // Proje renkleri
  const projectColors = [
    'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
    'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
  ];

  // Skill renkleri
  const skillColors = [
    'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300',
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-300',
    'bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-300'
  ];

  const ProjectCard = ({ project, index, isActive, onClick }) => (
    <div
      className={`
        group relative overflow-hidden rounded-3xl border-2 transition-all duration-500 cursor-pointer
        ${isActive 
          ? 'border-blue-300 dark:border-blue-600 shadow-2xl scale-105' 
          : 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 hover:shadow-xl hover:scale-102'
        }
        ${projectColors[index]}
      `}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-black/20"></div>
      
      <div className="relative p-6 lg:p-8">
        {/* Proje başlığı */}
        <h3 className="text-xl lg:text-2xl font-bold font-playfair mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Proje açıklaması */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-xs lg:text-sm line-clamp-3">
          {project.text}
        </p>

        {/* Teknolojiler */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Object.values(project.skills).map((skill, i) => (
            <span
              key={i}
              className={`
                px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-300
                ${skillColors[index]} hover:scale-110 hover:shadow-md
              `}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Linkler */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <a 
            href={project.viewGit.link || '#'} 
            className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 font-medium text-xs"
          >
            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            {project.viewGit.text}
          </a>
          <a 
            href={project.viewGit.buttonLink || '#'} 
            className="inline-flex items-center px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium text-xs hover:shadow-lg hover:scale-105"
          >
            {project.viewGit.button}
            <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Proje görseli */}
        {project.image && (
          <div className="relative group mt-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 lg:h-80 object-contain rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white/50 dark:bg-gray-800/50 p-2" 
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-36 dark:bg-dark-bg2 dark:text-dark-text">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {projectsData.title}
        </h2>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={false}
              onClick={() => {}}
            />
          ))}
        </div>

        {/* Mobile/Tablet Layout - Carousel */}
        <div className="lg:hidden">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-8 space-x-2">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          {/* Project Display */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProject * 100}%)` }}
            >
              {allProjects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ProjectCard
                    project={project}
                    index={index}
                    isActive={index === activeProject}
                    onClick={() => setActiveProject(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveProject(activeProject > 0 ? activeProject - 1 : allProjects.length - 1)}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveProject(activeProject < allProjects.length - 1 ? activeProject + 1 : 0)}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
