import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4">
            Leroy Löwe
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 font-light">
            Developer & Gastronomer
          </p>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Crafting digital experiences through code and creativity.
          Building beautiful, functional applications that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/portfolio">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Get In Touch</Button>
          </Link>
        </div>
        
        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
