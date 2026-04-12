import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import portfolioData from '../data/portfolio.json';
import Button from '../components/ui/Button';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects?.find(p => p.id === id);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/portfolio">
          <Button>Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/portfolio" className="text-primary hover:underline mb-8 block">
          ← Back to Portfolio
        </Link>
        
        <Card>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View Code</Button>
              </a>
            )}
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <Button>Live Demo</Button>
              </a>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
