import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
        <p className="text-xl mb-8 text-gray-100">
          Let's create something amazing. Get in touch with me today.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg">
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
