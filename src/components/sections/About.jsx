import React from 'react';
import Card from '../ui/Card';

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <Card>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Hi! I'm Leroy, a passionate developer and gastronomer based in Spain.
              With expertise in modern web technologies and a keen eye for design,
              I craft digital experiences that are both functional and beautiful.
            </p>
            
            <h3>Background</h3>
            <p>
              My journey spans from software development to the culinary arts.
              This unique combination allows me to approach problems with creativity
              and precision, whether building applications or creating memorable experiences.
            </p>
            
            <h3>Specialties</h3>
            <ul>
              <li>React & Modern JavaScript</li>
              <li>Full-stack web development</li>
              <li>UI/UX design and implementation</li>
              <li>Cloud deployment and DevOps</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
