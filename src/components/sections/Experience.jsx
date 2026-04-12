import React from 'react';
import Badge from '../ui/Badge';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Company',
      position: 'Senior Developer',
      period: '2022 - Present',
      description: 'Leading development of innovative web applications',
    },
    {
      company: 'Another Company',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 pb-6">
              <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              <Badge>{exp.period}</Badge>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
