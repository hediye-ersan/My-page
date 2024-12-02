import React from 'react';

const Skills = ({ skillsData }) => {
  return (
    <section className="py-16 font-inter">
      <h2 className=" text-5xl ">{skillsData.title}</h2>
      <div className="flex flex-wrap gap-8 mt-12 mb-12 justify-center text-2xl">
        {skillsData.skill.map((skill, index) => (
          <div key={index} className="text-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="mx-auto mb-2"
            />
            <p className='text-[#777777]'>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
